import mongoose from "mongoose"

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

const globalWithMongoose = global as typeof globalThis & {
  mongooseCache?: MongooseCache
}

const cached: MongooseCache = globalWithMongoose.mongooseCache || {
  conn: null,
  promise: null,
}

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = cached
}

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI

  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in environment variables")
  }

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI as string, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (err) {
    // Reset cache so subsequent calls retry instead of reusing the rejected promise
    cached.promise = null
    cached.conn = null
    throw err
  }

  return cached.conn
}

export default connectToDatabase
