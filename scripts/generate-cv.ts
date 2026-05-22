const { pdf } = require("@react-pdf/renderer")
const { cvContentEN, cvContentFR } = require("../lib/cv-content")
const React = require("react")
const { CVDocument } = require("../lib/cv-template")

async function generateCV() {
  try {
    const fs = require("fs")

    // Generate English CV
    const pdfDocEN = await pdf(React.createElement(CVDocument, { content: cvContentEN }))
    const pdfBytesEN = await pdfDocEN.toBlob()
    const arrayBufferEN = await pdfBytesEN.arrayBuffer()
    const bufferEN = Buffer.from(arrayBufferEN)
    fs.writeFileSync("public/Shay_Acoca_CV_EN.pdf", bufferEN)
    console.log("✅ English CV PDF generated successfully: public/Shay_Acoca_CV_EN.pdf")

    // Generate French CV
    const pdfDocFR = await pdf(React.createElement(CVDocument, { content: cvContentFR }))
    const pdfBytesFR = await pdfDocFR.toBlob()
    const arrayBufferFR = await pdfBytesFR.arrayBuffer()
    const bufferFR = Buffer.from(arrayBufferFR)
    fs.writeFileSync("public/Shay_Acoca_CV_FR.pdf", bufferFR)
    console.log("✅ French CV PDF generated successfully: public/Shay_Acoca_CV_FR.pdf")

    console.log("\n✅ All CV PDFs generated successfully!")
  } catch (error) {
    console.error("❌ Error generating PDFs:", error)
    process.exit(1)
  }
}

generateCV()
