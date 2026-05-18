import mongoose from "mongoose"

const uri = process.env.MONGODB_URI

if (!uri) {
  console.error("FAIL: MONGODB_URI missing")
  process.exit(1)
}

// Show URI structure without password
const safeUri = uri.replace(/:([^:@]+)@/, ":***@")
console.log("URI shape:", safeUri)
console.log("")

mongoose.set("debug", false)

try {
  console.log("Attempting connection (timeout 25s)...")
  const conn = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 25000,
    connectTimeoutMS: 25000,
  })

  console.log("OK CONNECTED")
  console.log("Host:", conn.connection.host)
  console.log("DB:", conn.connection.name)
  console.log("ReadyState:", conn.connection.readyState)

  await mongoose.disconnect()
  process.exit(0)
} catch (error) {
  console.error("FAIL — full error:")
  console.error("Name:", error.name)
  console.error("Message:", error.message)
  console.error("Code:", error.code)
  console.error("CodeName:", error.codeName)

  if (error.reason) {
    console.error("Reason.type:", error.reason.type)
    if (error.reason.servers) {
      console.error("Servers:")
      for (const [host, desc] of error.reason.servers) {
        console.error(`  ${host}`)
        console.error(`    type: ${desc.type}`)
        console.error(`    error: ${desc.error?.message || "n/a"}`)
      }
    }
  }
  process.exit(1)
}
