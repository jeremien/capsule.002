import os
from flask import Flask
from flask import (
                    render_template,
                    send_from_directory,
                    json,
                    jsonify,
                    request
                  )
from flask.wrappers import Request 

app = Flask(__name__)
app.debug = True

data = [
        {'firstname': 'joe', 
        'lastname':'éponge'},
        {'firstname': 'julie', 
        'lastname':'jacob'},
       ]

def open_file(file, type):
  with app.open_resource(f'data/{file}') as d:
    return json.load(d)

@app.route('/')
def home():
  new_data = open_file('data.json', type='json')
  return render_template('home.html', datas=new_data)

@app.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)

if __name__ == "__main__":
  app.run(debug=True)