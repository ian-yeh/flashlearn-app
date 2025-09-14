# https://neon.com/docs/guides/sqlalchemy-migrations
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import uvicorn

from app.models import Base, Note
from app.database import SessionLocal, engine
from app.schema import NoteCreate 

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "Welcome to the Book Author API"}

@app.get("/notes/")
def read_notes(db: Session = Depends(get_db)):
    notes = db.query(Note).all()
    return notes

@app.post("/notes/")
def create_note(note: NoteCreate, db: Session = Depends(get_db)):
    note_obj = Note(content=note.content)
    db.add(note_obj)
    db.commit()
    db.refresh(note_obj)
    return note_obj 

@app.delete("/notes/{note_id}")
def delete_note(note_id: int, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    db.delete(note)
    db.commit()

    return {"message": "Note deleted successfully"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
