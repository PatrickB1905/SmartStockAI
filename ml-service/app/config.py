from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_host: str
    app_port: int
    forecast_period_days: int

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
