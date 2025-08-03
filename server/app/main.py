from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from .database import connect_to_mongo, close_mongo_connection
import os
from dotenv import load_dotenv

load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await connect_to_mongo()
    yield
    # Shutdown
    await close_mongo_connection()

app = FastAPI(
    title="BJP Marine Engineers API",
    version="1.0.0",
    description="API for BJP Marine Engineers and Workers",
    lifespan=lifespan
)

# CORS middleware for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to BJP Marine Engineers API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "environment": os.getenv("ENVIRONMENT", "development")}