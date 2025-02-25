from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
from models import db
from routes import bp

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
CORS(app)

app.register_blueprint(bp, url_prefix="/api")

if __name__=='__main__':
    app.run(port=8000,debug=True, host='0.0.0.0')
