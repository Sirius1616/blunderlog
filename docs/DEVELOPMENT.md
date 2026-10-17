# Development Setup

## Prerequisites

- Python 3.11+
- Node.js 20+
- PostgreSQL 16+
- Stockfish (included in `bin/` or installed system-wide)

## Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -e ".[dev]"
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Testing

```bash
cd backend && pytest
cd frontend && npm run test  # if configured
```

## Database Setup

```bash
createdb blunderlog  # or via psql
alembic revision --autogenerate -m "initial"
```
