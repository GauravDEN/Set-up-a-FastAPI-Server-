from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# For POST requests
class Numbers(BaseModel):
    num1: int
    num2: int

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Calculator!"}

# --- PATH PARAMETER ENDPOINTS ---

@app.get("/add/{num1}/{num2}")
def add(num1: int, num2: int):
    return {"result": num1 + num2}

@app.get("/subtract/{num1}/{num2}")
def subtract(num1: int, num2: int):
    return {"result": num1 - num2}

@app.get("/multiply/{num1}/{num2}")
def multiply(num1: int, num2: int):
    return {"result": num1 * num2}

@app.get("/divide/{num1}/{num2}")
def divide(num1: int, num2: int):
    if num2 == 0:
        raise HTTPException(status_code=400, detail="Division by zero is not allowed")
    return {"result": num1 / num2}

# --- QUERY PARAMETER ENDPOINTS ---

@app.get("/add_query")
def add_query(num1: int, num2: int):
    return {"result": num1 + num2}

@app.get("/multiply_query")
def multiply_query(num1: int, num2: int):
    return {"result": num1 * num2}

# --- POST BODY ENDPOINTS ---

@app.post("/add_body")
def add_body(data: Numbers):
    return {"result": data.num1 + data.num2}

@app.post("/divide_body")
def divide_body(data: Numbers):
    if data.num2 == 0:
        raise HTTPException(status_code=400, detail="Division by zero is not allowed")
    return {"result": data.num1 / data.num2}

# --- Uvicorn server runner ---

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
