from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import resend

app = FastAPI()
load_dotenv()
# Allow frontend (Vite runs on 5173)
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["http://localhost:5173"],
    allow_origins=[
    "http://localhost:5173",
    "portfolio-gs8qas32g-gade-siddhartha-kumars-projects.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.get("/")
def home():
    return {"message": "Backend is running"}


@app.post("/contact")
async def send_message(form: ContactForm):

    resend.api_key = os.getenv("RESEND_API_KEY")

    try:
        resend.Emails.send({
            "from": "onboarding@resend.dev",   # temporary default sender
            "to": os.getenv("RECEIVER_EMAIL"),
            "subject": "New Portfolio Contact Message",
            "text": f"""
Name: {form.name}
Email: {form.email}

Message:
{form.message}
"""
        })

        return {"message": "Email sent successfully"}

    except Exception as e:
        print("EMAIL ERROR:", str(e))
        return {"error": str(e)}
