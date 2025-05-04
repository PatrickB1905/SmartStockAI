from fastapi import FastAPI

from .api.forecast import router as forecast_router
from .api.health import router as health_router
from .config import settings

app = FastAPI(title="SmartStockAI ML Service")

app.include_router(health_router, prefix="/health", tags=["Health"])
app.include_router(forecast_router, prefix="/forecast", tags=["Forecast"])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host=settings.app_host,
        port=settings.app_port,
        reload=True,
    )
