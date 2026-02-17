from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
app = FastAPI()
load_dotenv()
# Allow frontend (Vite runs on 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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

    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "New Portfolio Contact Message"
    msg["From"] = sender_email
    msg["To"] = receiver_email

    text = f"""
    Name: {form.name}
    Email: {form.email}

    Message:
    {form.message}
    """

    msg.attach(MIMEText(text, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()

        return {"message": "Email sent successfully"}

    except Exception as e:
        return {"error": str(e)}
