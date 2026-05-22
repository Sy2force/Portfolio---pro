const { pdf } = require("@react-pdf/renderer")
const { writeFileSync } = require("fs")
const { CVTemplate } = require("../lib/cv-template")

async function generateCV() {
  try {
    const pdfDoc = await pdf(CVTemplate())
    const pdfBytes = await pdfDoc.toBuffer()
    
    writeFileSync("public/Shay_Acoca_CV.pdf", pdfBytes)
    console.log("✅ CV PDF generated successfully: public/Shay_Acoca_CV.pdf")
  } catch (error) {
    console.error("❌ Error generating PDF:", error)
    process.exit(1)
  }
}

generateCV()
