import enum
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Table
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .database import Base
from pydantic import BaseModel
from typing import List
from uuid import UUID, uuid4
class Author(BaseModel):
    name: str
    affiliation: str

class Article(BaseModel):
    title: str
    abstract: str
    authors: List[Author]
    institutions: List[str]
    keywords: List[str]
    full_text: str
    pdf_url: str
    publication_date: str
    references: List[str]
