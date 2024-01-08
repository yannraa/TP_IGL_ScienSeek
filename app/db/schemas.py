from pydantic import BaseModel
from typing import List, Optional

class UserBase(BaseModel):
    email: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    role: int
    username: str

class UserOut(UserBase):
    class Config:
        orm_mode = True

class UserCreate(UserBase):
    password: str
    is_active: bool

    class Config:
        orm_mode = True

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class UserEdit(UserBase):
    password: Optional[str] = None

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str = None
    permissions: List[str]

class AuthorBase(BaseModel):
    name: str

class AuthorCreate(AuthorBase):
    pass

class Author(AuthorBase):
    id: int

    class Config:
        orm_mode = True

class InstitutionBase(BaseModel):
    name: str

class InstitutionCreate(InstitutionBase):
    pass

class Institution(InstitutionBase):
    id: int

    class Config:
        orm_mode = True

class KeywordBase(BaseModel):
    name: str

class KeywordCreate(KeywordBase):
    pass

class Keyword(KeywordBase):
    id: int

    class Config:
        orm_mode = True

class ArticleBase(BaseModel):
    title: str
    abstract: str
    text: str
    pdf_url: Optional[str]

class ArticleCreate(ArticleBase):
    pass

class Article(ArticleBase):
    id: int
    authors: List[Author] = []
    keywords: List[Keyword] = []

    class Config:
        orm_mode = True

class ReferenceBase(BaseModel):
    content: str

class ReferenceCreate(ReferenceBase):
    pass

class Reference(ReferenceBase):
    id: int
    article_id: int

    class Config:
        orm_mode = True
