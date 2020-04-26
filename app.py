# external
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify

# external - homemade
from xlogger.logger import logger


app = Flask(__name__, static_url_path = '/static', template_folder = '/templates')


@app.route('/')
@app.route('/index')
def home():
    return render_template('index.html')

def main():
    app.run(host='0.0.0.0',port=80)

if __name__ == "__main__":
    main()
