from flask import Blueprint, request, jsonify
from models import db, Comment
from utlis import fetch_youtube_comments, analyze_sentiment

bp = Blueprint("api", __name__)

@bp.route("/fetch-comments", methods=["POST"])
def fetch_comments():
    data = request.json
    video_id = data.get("video_id")
    
    if not video_id:
        return jsonify({"error": "Missing video_id"}), 400
    
    comments = fetch_youtube_comments(video_id)
    for comment in comments:
        sentiment = analyze_sentiment(comment["comment_text"])
        masked_username = comment["username"][0] + "*" * (len(comment["username"]) - 1)

        new_comment = Comment(
            video_id=video_id,
            username=comment["username"],
            masked_username=masked_username,
            comment_text=comment["comment_text"],
            sentiment=sentiment
        )
        db.session.add(new_comment)
    
    db.session.commit()
    return jsonify({"message": "Comments fetched and analyzed"}), 200

@bp.route("/get-insights", methods=["GET"])
def get_insights():
    video_id = request.args.get("video_id")
    if not video_id:
        return jsonify({"error": "Missing video_id"}), 400

    comments = Comment.query.filter_by(video_id=video_id).all()
    total = len(comments)
    agreement = sum(1 for c in comments if c.sentiment == "Agree")
    disagreement = sum(1 for c in comments if c.sentiment == "Disagree")
    
    insights = {
        "total_comments": total,
        "agreement_percentage": (agreement / total) * 100 if total else 0,
        "disagreement_percentage": (disagreement / total) * 100 if total else 0,
    }
    return jsonify(insights), 200
