const { pdf } = require("@react-pdf/renderer")
const { cvContentSummaryEN, cvContentSummaryFR } = require("../lib/cv-content")
const React = require("react")
const { CVDocument } = require("../lib/cv-template")

async function generateSummaryCV() {
  try {
    const fs = require("fs")

    // Generate English Summary CV
    const pdfDocEN = await pdf(React.createElement(CVDocument, { content: cvContentSummaryEN }))
    const pdfBytesEN = await pdfDocEN.toBlob()
    const arrayBufferEN = await pdfBytesEN.arrayBuffer()
    const bufferEN = Buffer.from(arrayBufferEN)
    fs.writeFileSync("public/Shay_Acoca_CV_Summary_EN.pdf", bufferEN)
    console.log("✅ English Summary CV PDF generated successfully: public/Shay_Acoca_CV_Summary_EN.pdf")

    // Generate French Summary CV
    const pdfDocFR = await pdf(React.createElement(CVDocument, { content: cvContentSummaryFR }))
    const pdfBytesFR = await pdfDocFR.toBlob()
    const arrayBufferFR = await pdfBytesFR.arrayBuffer()
    const bufferFR = Buffer.from(arrayBufferFR)
    fs.writeFileSync("public/Shay_Acoca_CV_Summary_FR.pdf", bufferFR)
    console.log("✅ French Summary CV PDF generated successfully: public/Shay_Acoca_CV_Summary_FR.pdf")

    console.log("\n✅ All Summary CV PDFs generated successfully!")
  } catch (error) {
    console.error("❌ Error generating Summary PDFs:", error)
    process.exit(1)
  }
}

generateSummaryCV()
