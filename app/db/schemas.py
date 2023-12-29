
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    role:int


class UserOut(UserBase):
    pass

    class Config:
        orm_mode = True
class UserCreate(UserBase):
    password: str


    class Config:
        orm_mode = True
class User(UserBase):
    id: int
    is_active: bool
    class Config:
        orm_mode = True

class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"