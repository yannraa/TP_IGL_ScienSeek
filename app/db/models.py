import enum
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Table
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .database import Base

# Table de liaison entre les auteurs et les institutions
author_institution_association = Table(
    "author_institution_association",
    Base.metadata,
    Column("author_id", Integer, ForeignKey("authors.id")),
    Column("institution_id", Integer, ForeignKey("institutions.id")),
)

# Table de liaison entre les articles et les mots clés
article_keyword_association = Table(
    "article_keyword_association",
    Base.metadata,
    Column("article_id", Integer, ForeignKey("articles.id")),
    Column("keyword_id", Integer, ForeignKey("keywords.id")),
)

class Author(Base):
    __tablename__ = "authors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    # Relation avec les institutions auxquelles appartient l'auteur
    institutions = relationship("Institution", secondary=author_institution_association)

class Institution(Base):
    __tablename__ = "institutions"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

class Keyword(Base):
    __tablename__ = "keywords"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

class Article(Base):
    __tablename__ = "articles"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    abstract = Column(String)
    text = Column(String)
    pdf_url = Column(String)

    # Relation avec les auteurs de l'article
    authors = relationship("Author", secondary=author_institution_association)

    # Relation avec les mots clés de l'article
    keywords = relationship("Keyword", secondary=article_keyword_association)

    # Relation avec les références bibliographiques de l'article
    references = relationship("Reference", back_populates="article")

class Reference(Base):
    __tablename__ = "references"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String)
    article_id = Column(Integer, ForeignKey("articles.id"))

    # Relation avec l'article associé à la référence
    article = relationship("Article", back_populates="references")

class UserRole(enum.IntEnum):
    administrateur = 1
    utilisateur = 2
    modérateur = 3

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, nullable=False, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, index=True)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=False)
    role = Column(Integer)

