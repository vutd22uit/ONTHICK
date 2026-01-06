const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

const slideDir = path.join(__dirname, '../SLIDE');

async function extractSlides() {
    try {
        const files = fs.readdirSync(slideDir).filter(file => file.toLowerCase().endsWith('.pdf'));

        console.log(`Found ${files.length} PDF files.`);

        for (const file of files) {
            const filePath = path.join(slideDir, file);

            console.log(`\n--- Extracting: ${file} ---`);

            const pdfParser = new PDFParser(this, 1); // 1 = text content only

            // Create a promise to handle the async event-based parsing
            const parsePromise = new Promise((resolve, reject) => {
                pdfParser.on("pdfParser_dataError", errData => {
                    console.error(`Error parsing ${file}:`, errData.parserError);
                    resolve(); // Resolve anyway to continue to next file
                });

                pdfParser.on("pdfParser_dataReady", pdfData => {
                    try {
                        const text = pdfParser.getRawTextContent().replace(/\n\s*\n/g, '\n').trim();

                        console.log(`Pages: ${pdfData.formImage.Pages.length}`);
                        console.log(`Content Preview:\n${text.substring(0, 500)}...`);

                        const outputFilename = `extracted_${file}.txt`;
                        const outputPath = path.join(__dirname, '../data', outputFilename);
                        fs.writeFileSync(outputPath, text);
                        console.log(`Full content saved to ${outputPath}`);
                        resolve();
                    } catch (e) {
                        console.error("Error processing text:", e);
                        resolve();
                    }
                });
            });

            pdfParser.loadPDF(filePath);
            await parsePromise;
        }
    } catch (err) {
        console.error("Error reading directory:", err);
    }
}

extractSlides();
