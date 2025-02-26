# YouTube Comment Sentiment Analysis

![YouTube Sentiment Analysis](https://img.shields.io/badge/Flask-Backend-blue) ![SQLite](https://img.shields.io/badge/SQLite-Database-green) ![React](https://img.shields.io/badge/React-Frontend-orange)

## 📌 Overview
This project analyzes YouTube video comments to determine their sentiment (Positive, Neutral, or Negative) using the **Gemini API**. The application is built with **Flask (backend)**, **React (frontend)**, and **SQLite (database)**.

## ✨ Features
- Fetches comments from YouTube videos.
- Analyzes sentiment using Google Gemini API.
- Displays sentiment analysis results in an interactive UI.
- Fully responsive design with a user-friendly interface.

## 🏗️ Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Flask, Flask-CORS, Flask-SQLAlchemy
- **Database:** SQLite
- **External APIs:** YouTube Data API v3, Gemini API

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/your-username/youtube-sentiment-analysis.git
$ cd youtube-sentiment-analysis
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
YOUTUBE_API_KEY=your_youtube_api_key
GEMINI_API_KEY=your_gemini_api_key
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

### Fetch Comments
```http
GET /api/fetch-comments?video_id=<video_id>
```
- **Response:** JSON containing comments

### Analyze Sentiment
```http
POST /api/analyze-sentiment
```
- **Request Body:** `{ "text": "This is a comment." }`
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
