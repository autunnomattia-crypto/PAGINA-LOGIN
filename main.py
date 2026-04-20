from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") # il punto dove chiamiamo al server web
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

