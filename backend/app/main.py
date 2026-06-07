from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CloudOps360 API",
    description="Backend API for AI-powered Cloud Governance, FinOps and DevOps Control Center",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "CloudOps360 API is running",
        "status": "healthy"
    }

@app.get("/health")
def health_check():
    return {
        "service": "cloudops360-backend",
        "status": "ok"
    }