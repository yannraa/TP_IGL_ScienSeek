
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    first_name:str
    last_name:str
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
    permissions: int = "userrole"