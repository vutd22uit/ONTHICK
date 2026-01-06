import os
import pypdf

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLIDE_DIR = os.path.join(BASE_DIR, 'SLIDE')
DATA_DIR = os.path.join(BASE_DIR, 'data')

def extract_text_from_pdf(pdf_path):
    print(f"Processing: {pdf_path}")
    text = ""
    try:
        reader = pypdf.PdfReader(pdf_path)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
    return text

def main():
    if not os.path.exists(SLIDE_DIR):
        print(f"Directory not found: {SLIDE_DIR}")
        return

    pdf_files = [f for f in os.listdir(SLIDE_DIR) if f.lower().endswith('.pdf')]
    print(f"Found {len(pdf_files)} PDF files.")

    for filename in pdf_files:
        pdf_path = os.path.join(SLIDE_DIR, filename)
        extracted_text = extract_text_from_pdf(pdf_path)
        
        if extracted_text:
            output_filename = f"extracted_{filename}.txt"
            output_path = os.path.join(DATA_DIR, output_filename)
            
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(extracted_text)
            
            print(f"Saved text to: {output_path}")

if __name__ == "__main__":
    main()
