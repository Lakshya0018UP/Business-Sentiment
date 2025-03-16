# Business Sentiment Analysis

![Flask](https://img.shields.io/badge/Flask-Backend-blue) ![SQLite](https://img.shields.io/badge/SQLite-Database-green) ![React](https://img.shields.io/badge/React-Frontend-orange) ![Machine Learning](https://img.shields.io/badge/ML-Model-purple)

## 📌 Overview
This project analyzes business-related comments and reviews to determine their sentiment (**Positive, Neutral, or Negative**) using a **custom Machine Learning model**. The application is built with **Flask (backend)**, **React.js (frontend)**, and **SQLite (database)**.

## ✨ Features
- Extracts business-related comments and reviews.
- Analyzes sentiment using a trained **ML model (Logistic Regression/Transformer-based model)**.
- Displays sentiment analysis results in an interactive UI.
- Fully responsive design with a user-friendly interface.

## 🏗️ Tech Stack
- **Frontend:** React.js
- **Backend:** Flask, Flask-CORS, Flask-SQLAlchemy
- **Database:** SQLite
- **Machine Learning:** Scikit-learn, Transformers, TensorFlow/PyTorch
- **External APIs:** Web scraping for business reviews (optional)

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/your-username/business-sentiment-analysis.git
$ cd business-sentiment-analysis
```

### 2️⃣ Setup Backend
```sh
$ cd backend
$ python -m venv venv
$ source venv/bin/activate  # (For Windows: venv\Scripts\activate)
$ pip install -r requirements.txt
```

#### Configure Environment Variables
Create a `.env` file inside the `backend` folder:
```sh
SQLALCHEMY_DATABASE_URI=sqlite:///database.db
MODEL_PATH=ml_model/model.pkl
```

Run the backend server:
```sh
$ flask run --host=0.0.0.0 --port=8000
```

### 3️⃣ Setup Frontend
```sh
$ cd frontend
$ npm install
$ npm start
```

## 🎯 API Endpoints

### Fetch Business Comments
```http
GET /api/fetch-comments?source=<source>
```
- **Response:** JSON containing business comments or reviews

### Analyze Sentiment
```http
POST /api/analyze-sentiment
```
- **Request Body:** `{ "text": "This is a business review." }`
- **Response:** `{ "sentiment": "Positive" }`

## 📸 Screenshots
![App Preview](https://your-image-url.com)

## 🌍 Deployment
🚧 Deployment is currently under development.

## 🤝 Contributing
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the **MIT License**.

---
💡 *Feel free to contribute, open issues, or suggest improvements!* 🚀