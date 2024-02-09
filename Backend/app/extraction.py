import PyPDF2
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import fitz  # Module de PyMuPDF
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

def extract_pdf(file_path):
    with open(file_path, 'rb') as file:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(file)

        # Get the number of pages in the PDF
        num_pages = len(pdf_reader.pages)

        # Extract each page as a separate PDF file
        for page_num in range(num_pages):
            # Create a PDF writer object
            pdf_writer = PyPDF2.PdfWriter()

            # Add the current page to the PDF writer object
            pdf_writer.add_page(pdf_reader.pages[page_num])

            # Write the current page as a separate PDF file
            with open(f'page_{page_num+1}.pdf', 'wb') as output_file:
                pdf_writer.write(output_file)



def extract_pdf_content(file_path):
    pdf_content = {"text": [], "images": []}

    with fitz.open(file_path) as pdf_document:
        num_pages = pdf_document.page_count

        for page_number in range(num_pages):
            page = pdf_document[page_number]

            # Extraire le texte de la page
            text = page.get_text("text")
            pdf_content["text"].append(text)

            # Extraire les images de la page
            images = page.get_images(full=True)
            pdf_content["images"].extend(images)

    return pdf_content
