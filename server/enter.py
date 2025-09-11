import json
from pymongo import MongoClient

# --- Replace with your actual MongoDB Atlas URI ---
MONGO_URI = "mongodb+srv://MEWU:MEWU@mewu.9g0ghgz.mongodb.net/"

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["members"]

# ------------------ HELPERS ------------------

def normalize_key(key: str) -> str:
    """Convert keys to lowercase with underscores."""
    return key.strip().lower().replace(" ", "_")

def sentence_case(value: str) -> str:
    """Convert values to sentence case if string, otherwise return as is."""
    if isinstance(value, str):
        value = value.strip()
        if not value:
            return value
        return value[0].upper() + value[1:].lower()
    return value

def normalize_document(doc: dict) -> dict:
    """Normalize keys and values in a document."""
    return {normalize_key(k): sentence_case(v) for k, v in doc.items()}

def load_and_normalize(file_path: str):
    """Load JSON and normalize each document."""
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return [normalize_document(doc) for doc in data]

# ------------------ LOAD & NORMALIZE DATA ------------------

haryana_data = load_and_normalize("haryana_state_office_bearers.json")
maharashtra_data = load_and_normalize("maharashtra_state_office_bearers.json")
national_data = load_and_normalize("national_office_bearers.json")
punjab_data = load_and_normalize("punjab_state_office_bearers.json")

# ------------------ INSERT INTO COLLECTIONS ------------------

if haryana_data:
    db["haryana-members"].insert_many(haryana_data)

if maharashtra_data:
    db["maharashtra-members"].insert_many(maharashtra_data)

if national_data:
    db["national-members"].insert_many(national_data)

if punjab_data:
    db["punjab-members"].insert_many(punjab_data)

print("✅ Normalized data inserted successfully into respective collections!")
