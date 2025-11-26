#!/usr/bin/env python3
"""flask aplication"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def htmlTemplate():
    """ Using html templates """
    return render_template("0-index.html")

if __name__ == "__main__":
    app.run()