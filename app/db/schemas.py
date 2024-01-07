
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    first_name:t.Optional[str] =None 
    last_name: t.Optional[str] = None
    role:int
    username:str



class UserOut(UserBase):
    pass

    class Config:
      from_attributes = True
class UserCreate(UserBase):
    password: str
    username:str
    is_active: bool
    first_name:t.Optional[str] =None 
    last_name: t.Optional[str] = None
    role:int


    class Config:
       from_attributes = True
class User(UserBase):
    id: int
    is_active: bool
    class Config:
        from_attributes = True

class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str = None
    permissions: list


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
    pdf_url: str

class ArticleCreate(ArticleBase):
    pass

class Article(ArticleBase):
    id: int
    authors: t.List[Author] = []
    keywords: t.List[Keyword] = []

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
