import mongoose from "mongoose"
import fs from "fs"
import path from "path"

// Load .env.local manually
const envPath = path.join(process.cwd(), ".env.local")
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8")
  envContent.split("\n").forEach(line => {
    const [key, ...valueParts] = line.split("=")
    if (key && !key.startsWith("#") && valueParts.length > 0) {
      const value = valueParts.join("=").trim().replace(/^"|"$/g, "").replace(/^'|"$/g, "")
      process.env[key.trim()] = value
    }
  })
}

const uri = process.env.MONGODB_URI

console.log("URI exists:", Boolean(uri))

if (!uri) {
  console.error("FAIL: MONGODB_URI missing")
  process.exit(1)
}

try {
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 20000,
  })

  console.log("OK CONNECTED")
  console.log("Host:", mongoose.connection.host)
  console.log("DB:", mongoose.connection.name)

  await mongoose.connection.db.admin().ping()
  console.log("OK PING")

  await mongoose.disconnect()
  process.exit(0)
} catch (error) {
  console.error("FAIL:", error.message.split("\n")[0])
  process.exit(1)
}
