from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import Config

dp = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    dp.init_app(app)
    migrate.init_app(app, dp)

    from .routes import main 
    app.register_blueprint(main)

    with app.app_context():
        from . import routes,models
        dp.create_all()

    return app  