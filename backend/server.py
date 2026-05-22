from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Kumar Enterprises API")
api_router = APIRouter(prefix="/api")


# ============ MODELS ============
class QuoteRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    company: Optional[str] = ""
    products: Optional[str] = ""
    message: Optional[str] = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class QuoteRequestCreate(BaseModel):
    name: str
    email: str
    phone: str
    company: Optional[str] = ""
    products: Optional[str] = ""
    message: Optional[str] = ""


# ============ PRODUCT CATALOG (seed data) ============
CATEGORIES = [
    {"slug": "packaging", "name": "Packaging Materials", "icon": "package", "color": "amber"},
    {"slug": "glass", "name": "Glass & Ceramic", "icon": "wine", "color": "sky"},
    {"slug": "plastic", "name": "Plastic & Steel Ware", "icon": "utensils", "color": "rose"},
    {"slug": "stationery", "name": "Office Stationery", "icon": "pencil", "color": "emerald"},
    {"slug": "housekeeping", "name": "Housekeeping & Cleaning", "icon": "spray-can", "color": "violet"},
    {"slug": "safety", "name": "Safety & PPE Gear", "icon": "hard-hat", "color": "orange"},
    {"slug": "pantry", "name": "Pantry Supplies", "icon": "coffee", "color": "yellow"},
    {"slug": "electronics", "name": "Electronics & IT", "icon": "cpu", "color": "indigo"},
]

PRODUCTS = [
    # Packaging Materials
    {"name": "Bubble Roll", "category": "packaging"},
    {"name": "Corrugated Roll", "category": "packaging"},
    {"name": "Foam Roll", "category": "packaging"},
    {"name": "Wrapping Roll", "category": "packaging"},
    {"name": "Brown Tapes", "category": "packaging"},
    {"name": "Nylon Rassi", "category": "packaging"},
    {"name": "Packing Patti Roll", "category": "packaging"},
    {"name": "Packing Patti Clip", "category": "packaging"},
    {"name": "Packing Patti Tools", "category": "packaging"},
    {"name": "Packing Boxes", "category": "packaging"},
    {"name": "Thermocol Sheet", "category": "packaging"},
    {"name": "Thermocol Ball", "category": "packaging"},
    {"name": "Brown Paper Bag", "category": "packaging"},
    {"name": "Lock Bags", "category": "packaging"},
    {"name": "Carry Bag", "category": "packaging"},
    {"name": "Blue Carry Bag", "category": "packaging"},
    {"name": "P.P Bag", "category": "packaging"},
    {"name": "P.P. Gumming Bag", "category": "packaging"},
    {"name": "Gunny Bag & Roll", "category": "packaging"},
    {"name": "Sutali Roll", "category": "packaging"},

    # Glass & Ceramic
    {"name": "Water Glass", "category": "glass"},
    {"name": "Beer Mug", "category": "glass"},
    {"name": "Wine Glass", "category": "glass"},
    {"name": "Shot Glass", "category": "glass"},
    {"name": "Glass Bowl", "category": "glass"},
    {"name": "Glass Container", "category": "glass"},
    {"name": "Glass Tea Cup", "category": "glass"},
    {"name": "Ice-cream Bowls", "category": "glass"},
    {"name": "Glass Plate", "category": "glass"},
    {"name": "Ice-cream Cup", "category": "glass"},
    {"name": "Juice Glass", "category": "glass"},
    {"name": "Fruit Bowl", "category": "glass"},
    {"name": "Flower Pot", "category": "glass"},
    {"name": "Ceramic Soup Bowls", "category": "glass"},
    {"name": "Ceramic Bowls", "category": "glass"},
    {"name": "Ceramic Mug", "category": "glass"},
    {"name": "Cambro Containers", "category": "glass"},
    {"name": "Ceramic Plates", "category": "glass"},
    {"name": "Ceramic Tea Cup", "category": "glass"},
    {"name": "Dinner Set", "category": "glass"},

    # Plastic & Steel
    {"name": "Plastic Glass", "category": "plastic"},
    {"name": "Tea Coaster", "category": "plastic"},
    {"name": "Plastic Round Plate", "category": "plastic"},
    {"name": "Plastic Lunch Plate", "category": "plastic"},
    {"name": "Plastic Bowls", "category": "plastic"},
    {"name": "Plastic Tray", "category": "plastic"},
    {"name": "Plastic Container", "category": "plastic"},
    {"name": "Plastic Bottle", "category": "plastic"},
    {"name": "Snack Plastic Plate", "category": "plastic"},
    {"name": "Acrylic Bowl & Plates", "category": "plastic"},
    {"name": "Acrylic Lunch Plate", "category": "plastic"},
    {"name": "Acrylic Glass", "category": "plastic"},
    {"name": "Water Dispenser", "category": "plastic"},
    {"name": "Acrylic Soup Bowls", "category": "plastic"},
    {"name": "Acrylic Tray", "category": "plastic"},
    {"name": "Acrylic Bottles", "category": "plastic"},
    {"name": "Steel Glass", "category": "plastic"},
    {"name": "Steel Thali", "category": "plastic"},
    {"name": "Steel Snack Plate", "category": "plastic"},
    {"name": "Steel Spoon", "category": "plastic"},

    # Office Stationery
    {"name": "Correction Tape & Pens", "category": "stationery"},
    {"name": "Highlighter", "category": "stationery"},
    {"name": "Post-it Pads", "category": "stationery"},
    {"name": "Rubber Bands", "category": "stationery"},
    {"name": "Stamp Pads & Ink", "category": "stationery"},
    {"name": "Paper Pins", "category": "stationery"},
    {"name": "Push Pin & Binder Clips", "category": "stationery"},
    {"name": "Fevi Kwik & Glue Stick", "category": "stationery"},
    {"name": "L-Folder & Files", "category": "stationery"},
    {"name": "Printer Papers", "category": "stationery"},
    {"name": "Long Book", "category": "stationery"},
    {"name": "Paper Tray", "category": "stationery"},
    {"name": "Pencil & Eraser", "category": "stationery"},
    {"name": "Ball Pens", "category": "stationery"},
    {"name": "Sketch Pens", "category": "stationery"},
    {"name": "Marker Pens", "category": "stationery"},
    {"name": "Stapler & Pin", "category": "stationery"},
    {"name": "Punching Machine", "category": "stationery"},
    {"name": "Tape & Tape Dispenser", "category": "stationery"},
    {"name": "Envelopes", "category": "stationery"},
    {"name": "Business Card Holder", "category": "stationery"},
    {"name": "Box Files", "category": "stationery"},
    {"name": "Spring Files", "category": "stationery"},
    {"name": "Ring Binder", "category": "stationery"},
    {"name": "New Toner Cartridge", "category": "stationery"},
    {"name": "New Ink Cartridge", "category": "stationery"},
    {"name": "Ink Cartridge Refilling", "category": "stationery"},
    {"name": "Toner Cartridge Refilling", "category": "stationery"},
    {"name": "Punch Folder", "category": "stationery"},
    {"name": "White Board", "category": "stationery"},
    {"name": "Notice Board", "category": "stationery"},
    {"name": "Steel Lock", "category": "stationery"},

    # Housekeeping
    {"name": "Floor Mop & Bucket", "category": "housekeeping"},
    {"name": "Phenyl & Disinfectants", "category": "housekeeping"},
    {"name": "Tissue Rolls", "category": "housekeeping"},
    {"name": "Hand Wash & Sanitizer", "category": "housekeeping"},
    {"name": "Garbage Bags", "category": "housekeeping"},
    {"name": "Glass Cleaner", "category": "housekeeping"},
    {"name": "Air Freshener", "category": "housekeeping"},
    {"name": "Brooms & Brushes", "category": "housekeeping"},

    # Safety
    {"name": "Safety Helmets", "category": "safety"},
    {"name": "Safety Gloves", "category": "safety"},
    {"name": "Safety Goggles", "category": "safety"},
    {"name": "Face Masks (N95 / Surgical)", "category": "safety"},
    {"name": "Safety Shoes", "category": "safety"},
    {"name": "Reflective Jackets", "category": "safety"},
    {"name": "First Aid Kit", "category": "safety"},
    {"name": "Fire Extinguishers", "category": "safety"},

    # Pantry
    {"name": "Tea & Coffee Premix", "category": "pantry"},
    {"name": "Sugar Sachets", "category": "pantry"},
    {"name": "Paper Cups", "category": "pantry"},
    {"name": "Stirrers & Spoons", "category": "pantry"},
    {"name": "Biscuits & Snacks", "category": "pantry"},
    {"name": "Mineral Water", "category": "pantry"},

    # Electronics & IT
    {"name": "Mouse & Keyboard", "category": "electronics"},
    {"name": "Pen Drives & SSDs", "category": "electronics"},
    {"name": "HDMI & USB Cables", "category": "electronics"},
    {"name": "Extension Boards", "category": "electronics"},
    {"name": "Headphones", "category": "electronics"},
    {"name": "Webcams", "category": "electronics"},
    {"name": "Calculators", "category": "electronics"},
    {"name": "Power Banks", "category": "electronics"},
]


# ============ ROUTES ============
@api_router.get("/")
async def root():
    return {"message": "Kumar Enterprises API", "status": "ok"}


@api_router.get("/categories")
async def get_categories():
    counts = {}
    for p in PRODUCTS:
        counts[p["category"]] = counts.get(p["category"], 0) + 1
    return [{**c, "count": counts.get(c["slug"], 0)} for c in CATEGORIES]


@api_router.get("/products")
async def get_products(category: Optional[str] = None, search: Optional[str] = None):
    results = PRODUCTS
    if category and category != "all":
        results = [p for p in results if p["category"] == category]
    if search:
        s = search.lower().strip()
        results = [p for p in results if s in p["name"].lower()]
    return {"products": results, "total": len(results)}


@api_router.post("/quote-request", response_model=QuoteRequest)
async def create_quote_request(payload: QuoteRequestCreate):
    if not payload.name.strip() or not payload.email.strip() or not payload.phone.strip():
        raise HTTPException(status_code=400, detail="Name, email and phone are required")
    quote = QuoteRequest(**payload.model_dump())
    await db.quote_requests.insert_one(quote.model_dump())
    return quote


@api_router.get("/quote-requests", response_model=List[QuoteRequest])
async def list_quote_requests():
    items = await db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
