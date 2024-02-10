from extraction import extract_pdf_content
import unittest
class TestArticleExtraction(unittest.TestCase):
    def test_extract_pdf(self):
        link = "../Article_01.pdf"
        pdf_content = extract_pdf_content(link)
        self.assertIsNotNone(pdf_content["text"])
        self.assertIsNotNone(pdf_content["images"]) 