from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import resend

app = FastAPI()
load_dotenv()
# Allow frontend (Vite runs on 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://portfolio.vercel.app",  # your main production domain
        "https://www.gadesiddharthakumar.me", #.me diomain
        "https://gadesiddharthakumar.me", #.me diomain
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
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
