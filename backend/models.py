from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False)
    masked_username = db.Column(db.String(100), nullable=False)
    comment_text = db.Column(db.Text, nullable=False)
    sentiment = db.Column(db.String(20), nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())
