import { pdf } from "@react-pdf/renderer"
import { CVTemplate } from "../lib/cv-template"

async function generateCV() {
  try {
    const pdfDoc = await pdf(CVTemplate())
    const pdfBytes = await pdfDoc.toBlob()
    
    // Convert Blob to Buffer
    const arrayBuffer = await pdfBytes.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    const fs = await import("fs")
    fs.writeFileSync("public/Shay_Acoca_CV.pdf", buffer)
    console.log("✅ CV PDF generated successfully: public/Shay_Acoca_CV.pdf")
  } catch (error) {
    console.error("❌ Error generating PDF:", error)
    process.exit(1)
  }
}

generateCV()
