from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL", "mongodb+srv://MEWU:MEWU@mewu.9g0ghgz.mongodb.net/")
DATABASE_NAME = os.getenv("DATABASE_NAME", "members")

class Database:
    def __init__(self):
        self.client = None
        self.database = None

db = Database()

async def connect_to_mongo():
    """Create database connection"""
    try:
        db.client = AsyncIOMotorClient(MONGODB_URL)
        db.database = db.client[DATABASE_NAME]
        
        # Test the connection
        await db.client.admin.command('ping')
        print(f"✅ Connected to MongoDB Atlas - Database: {DATABASE_NAME}")
        
    except Exception as e:
        print(f"❌ Failed to connect to MongoDB: {e}")
        raise e

async def close_mongo_connection():
    """Close database connection"""
    if db.client:
        db.client.close()
        print("🔌 Disconnected from MongoDB Atlas")

def get_database():
    """Get database instance"""
    return db.database