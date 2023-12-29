import enum
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey,Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .database import Base

 


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
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=False)
