// Diagnostic script for Render deployment issues

console.log("=== RENDER DEPLOYMENT DIAGNOSTIC ===\n");

// Check environment variables
console.log("1. ENVIRONMENT VARIABLES CHECK");
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("ADMIN_PASSWORD exists:", !!process.env.ADMIN_PASSWORD);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Check MongoDB connection
console.log("\n2. MONGODB CONNECTION CHECK");
try {
  const { MongoClient } = require('mongodb');
  const uri = process.env.MONGODB_URI;
  
  if (uri) {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✓ MongoDB connection successful");
    await client.close();
  } else {
    console.log("✗ MONGODB_URI not found");
  }
} catch (error) {
  console.log("✗ MongoDB connection failed:", error.message);
}

console.log("\n3. API ROUTES CHECK");
console.log("Expected routes:");
console.log("  - POST /api/contact");
console.log("  - GET /api/contact (requires auth)");
console.log("  - POST /api/auth");
console.log("  - GET /api/comments");
console.log("  - POST /api/comments");

console.log("\n4. COMMON RENDER ISSUES");
console.log("Possible problems:");
console.log("  - Environment variables not set in Render dashboard");
console.log("  - MongoDB IP whitelist (0.0.0.0/0 required for Render)");
console.log("  - Build command issues");
console.log("  - Start command issues");
console.log("  - CORS configuration");

console.log("\n5. SOLUTIONS");
console.log("To fix Render issues:");
console.log("  1. Go to Render dashboard");
console.log("  2. Add environment variables:");
console.log("     - MONGODB_URI");
console.log("     - ADMIN_PASSWORD");
console.log("  3. Check MongoDB Atlas IP whitelist");
console.log("  4. Verify build and start commands");
console.log("  5. Check Render logs");

console.log("\n=== END DIAGNOSTIC ===");
