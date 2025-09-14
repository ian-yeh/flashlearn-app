from app.database import SessionLocal
from app.models import Note

def seed_data():
    db = SessionLocal()

    # Create notes
    notes = [
        Note(content="Remember to review chapter 3."),
        Note(content="Focus on character development."),
        Note(content="Check historical accuracy for the setting."),
    ]
    db.add_all(notes)
    db.commit()

    print("Data seeded successfully.")

if __name__ == "__main__":
    seed_data()