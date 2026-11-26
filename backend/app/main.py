from fastapi import FastAPI

app = FastAPI(
    title="Cortex API",
    description="API for the Cortex organizational knowledge platform.",
    version="0.1.0",
)


@app.get("/health", tags=["health"])
def health_check() -> dict[str, str]:
    return {"status": "ok"}
