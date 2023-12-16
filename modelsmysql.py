from sqlalchemy import Boolean , Column , Integer,String, CheckConstraint
from database import Base
class Utilisateur(Base):
    __tablename__='utilisateurs'
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(50))
    motdepasse= Column(String(50),unique=True,nullable =False)
    sexe = Column(String(10), nullable=False)
    email = Column(String(100), unique=True, nullable=False)

    __table_args__ = (
        CheckConstraint(
            "email REGEXP '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'",
            name="utilisateurs_email_format_check",
        ),
        CheckConstraint(
            "sexe IN ('masculin', 'féminin')",
            name="utilisateurs_sexe_check",
        ),
    )

class Post(Base):
        __tablename__='posts'
        id = Column(Integer, primary_key=True, index=True)
        titre = Column(String(50))
        contenu = Column(String(100))
        utilisateur_id = Column(Integer)