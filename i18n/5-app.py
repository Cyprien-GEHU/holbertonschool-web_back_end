#!/usr/bin/env python3
"""flask aplication"""

from flask import Flask, render_template, request, g
from flask_babel import Babel


users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config():
    """ config babel """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = "UTC"


def get_locale():
    """ get local with babel """
    locale = request.args.get("locale")

    if locale and locale in app.config['LANGUAGES']:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


def get_user():
    """ Get the user"""
    user = request.args.get("login_as")

    if user is None:
        return None

    return users.get(int(user))


app = Flask(__name__)
babel = Babel(app)
app.config.from_object(Config)
babel.init_app(app, locale_selector=get_locale)


@app.before_request
def before_request():
    """function before excute any request"""
    g.user = get_user()


@app.route('/', methods=['GET'])
def htmlTemplate():
    """ Using html templates """
    return render_template("5-index.html")


if __name__ == "__main__":
    app.run()
