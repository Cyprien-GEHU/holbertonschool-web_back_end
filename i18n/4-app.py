#!/usr/bin/env python3
"""flask aplication"""

from flask import Flask, render_template, request
from flask_babel import Babel


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


app = Flask(__name__)
babel = Babel(app)
app.config.from_object(Config)
babel.init_app(app, locale_selector=get_locale)


@app.route('/', methods=['GET'])
def htmlTemplate():
    """ Using html templates """
    return render_template("4-index.html")


if __name__ == "__main__":
    app.run()
