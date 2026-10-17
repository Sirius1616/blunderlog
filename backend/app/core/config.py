from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    PROJECT_NAME: str = "BlunderLog"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"

    SECRET_KEY: str = "change-me"
    ENVIRONMENT: str = "development"
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:8080",
    ]

    DATABASE_URL: str = "postgresql+psycopg://blunderlog:blunderlog@localhost:5432/blunderlog"

    STOCKFISH_PATH: str = "./bin/stockfish"
    STOCKFISH_THREADS: int = 1
    STOCKFISH_HASH: int = 256

    CHESS_COM_API_BASE: str = "https://api.chess.com/pub"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
