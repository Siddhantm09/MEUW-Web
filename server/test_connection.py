
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

async def test_connection():
    """Test MongoDB Atlas connection"""
    try:
        # Your MongoDB Atlas connection
        client = AsyncIOMotorClient("mongodb+srv://MEWU:MEWU@mewu.9g0ghgz.mongodb.net/")
        
        # Test the connection
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB Atlas!")
        
        # Access your database
        db = client.members
        
        # List collections
        collections = await db.list_collection_names()
        print(f"📁 Collections in 'members' database: {collections}")
        
        # Insert a test document
        test_collection = db.test
        result = await test_collection.insert_one({"test": "connection", "status": "working"})
        print(f"📝 Test document inserted with ID: {result.inserted_id}")
        
        # Read the test document back
        document = await test_collection.find_one({"_id": result.inserted_id})
        print(f"📖 Retrieved document: {document}")
        
        # Clean up - delete test document
        await test_collection.delete_one({"_id": result.inserted_id})
        print("🧹 Cleaned up test document")
        
        client.close()
        
    except Exception as e:
        print(f"❌ Connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_connection())