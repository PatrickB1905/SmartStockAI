from fastapi import APIRouter, HTTPException

from ..config import settings

router = APIRouter()


@router.get("/{product_id}")
async def forecast(product_id: int):
    if product_id < 1:
        raise HTTPException(status_code=400, detail="Invalid product_id")

    return {
        "product_id": product_id,
        "forecast_days": settings.forecast_period_days,
    }
