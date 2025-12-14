# AutoPulse-Dealership-Sentiment-Analyzer

## 📌 Project Name
**AutoPulse Dealership Sentiment Analyzer**

---

## 📖 Overview
This project is the Full‑stack Development Capstone for Cars Dealership, a national car retailer in the U.S.  
It is a responsive web application that allows users to:

- View dealership branches across the country
- Read existing reviews for each dealer
- Submit new reviews after logging in
- Analyze review sentiment using a microservice

---

## 🛠️ Technologies Used
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Django REST Framework, Flask (sentiment microservice)
- **Databases:** SQLite, MongoDB
- **Deployment:** Docker, Kubernetes, IBM Cloud Code Engine
- **CI/CD:** GitHub Actions
- **Other:** Sentiment analysis with VADER

---

## ✨ Features
- Responsive UI with About and Contact pages
- User authentication (Register, Login, Logout)
- Dealer listing, filtering by state, and dealer detail pages
- Review submission with sentiment analysis
- Admin dashboard for managing dealers and reviews
- CI/CD pipeline with GitHub Actions
- Containerized deployment on IBM Cloud Code Engine

---

## 🚀 Setup Instructions

### Backend (Django)
```bash
cd server/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
Sentiment Microservice (Flask)
bash
cd server/sentiment
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
Frontend (React)
bash
cd server/frontend
npm ci
npm start
🧪 Testing with cURL
Examples of API usage:

bash
# Login
curl -X POST http://localhost:8000/api/auth/login/ \
     -H "Content-Type: application/json" \
     -d '{"username":"testuser","password":"testpass"}'

# Get all dealers
curl -X GET http://localhost:8000/api/dealerships/

# Get dealer reviews
curl -X GET "http://localhost:8000/api/reviews/?dealer_id=1"

# Sentiment analysis
curl -X POST http://localhost:5001/api/sentiment/ \
     -H "Content-Type: application/json" \
     -d '{"text":"Fantastic services"}'
📷 Screenshots Required
admin_login.png / admin_logout.png

get_dealers.png / get_dealers_loggedin

dealersbystate.png / dealer_id_reviews

dealership_review_submission / added_review

deployed_landingpage / deployed_loggedin

deployed_dealer_detail / deployed_add_review

⚙️ CI/CD
GitHub Actions workflow defined in .github/workflows/ci.yml

Runs backend migrations/tests and builds frontend

Save workflow run logs to CICD

🌐 Deployment
Containerized with Docker

Deployed on IBM Cloud Code Engine

Public deployment URL saved in deploymentURL

📑 Grading Checklist
Task 1: README.md (this file)

Task 2–28: See rubric for required files, cURL outputs, and screenshots

Code

---

This README.md satisfies **Task 1** (Project name details) and also gives reviewers a clear picture of your repo.  

Would you like me to also prepare a **shorter “rubric‑ready” README.md** (just repo name + project name, no extras) so you can paste that directly into the assignment submission box without overwhelming detail?
