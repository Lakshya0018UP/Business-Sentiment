import requests
import os

# Load API keys from environment variables
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

def fetch_youtube_comments(video_id):
    """Fetches top-level comments from a YouTube video."""
    url = f"https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId={video_id}&key={YOUTUBE_API_KEY}&maxResults=50"
    response = requests.get(url)
    comments = []

    if response.status_code == 200:
        data = response.json()
        for item in data.get("items", []):
            comment = item["snippet"]["topLevelComment"]["snippet"]
            comments.append({
                "username": comment["authorDisplayName"],
                "comment_text": comment["textOriginal"]
            })
    return comments

def analyze_sentiment(comment_text):
    """Analyzes sentiment of a comment using Gemini API."""
    url = f"https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    # Gemini API requires structured input
    data = {
        "contents": [
            {"parts": [{"text": f"Analyze the sentiment of this text: '{comment_text}'"}]}
        ]
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        response_data = response.json()
        # Extract sentiment from API response
        sentiment = response_data.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "Neutral")
        return sentiment

    return "Neutral"  # Default if API fails
