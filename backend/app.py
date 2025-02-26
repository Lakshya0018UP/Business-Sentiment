from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
from models import db
from routes import bp
import os
app = Flask(__name__)
app.config.from_object(Config)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
CORS(app, origins=["http://localhost:3000"])

app.register_blueprint(bp, url_prefix="/api")

if __name__=='__main__':
    app.run(port=8000,debug=True, host='0.0.0.0')
