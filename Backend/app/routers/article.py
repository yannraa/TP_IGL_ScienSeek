from sqlalchemy.orm import Session 
from app.db.modelsarticle import Article
import typing as t
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from app.db.modelsarticle import Article
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search, Q
from app.db.crud_article import create_article, read_article, update_article, delete_article
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from app.extraction import extract_pdf,extract_pdf_content

router = APIRouter()

@router.post("/create/")
async def create_article_route(article: Article):
    return create_article(article)

@router.get("/read/{article_id}")
async def read_article_route(article_id: str):
    result = read_article(article_id)
    if result:
        return {"article": result}
    else:
        raise HTTPException(status_code=404, detail="Article non trouvé")

@router.put("/update/{article_id}")
async def update_article_route(article_id: str, updated_article: Article):
    return update_article(article_id, updated_article)

@router.delete("/delete/{article_id}")
async def delete_article_route(article_id: str):
    return delete_article(article_id)

@router.post("/extract_pdf_content/")
async def extract_pdf_content_endpoint(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        return JSONResponse(content={"message": "Unsupported file type"}, status_code=400)

    with open(f"{file.filename}", "wb") as f:
        f.write(file.file.read())

    extracted_content = extract_pdf_content(file.filename)

    return JSONResponse(content={"message": "PDF content extracted successfully", "extracted_content": extracted_content})


@router.post("/extract_pdf/")
async def extract_pdf_endpoint(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        return JSONResponse(content={"message": "Unsupported file type"}, status_code=400)

    with open(f"{file.filename}", "wb") as f:
        f.write(file.file.read())

    extract_pdf(file.filename)

    return JSONResponse(content={"message": "PDF file extracted successfully"})

@router.post("/upload_pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type not in ["application/pdf"]:
        return JSONResponse(content={"message": "Unsupported file type"}, status_code=400)

    with open(f"{file.filename}", "wb") as f:
        f.write(file.file.read())

    return JSONResponse(content={"message": "PDF file uploaded successfully"})