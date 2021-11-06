Flask 2 et vanilla javascript
https://openschool.art/pad/p/capsule002

http://www.enzomari.com/

# code boilerplate
https://github.com/jeremien/boilerplate_flask


# activer l'environement python
 python -m venv venv
 source venv/bin/activate

# installer les dependances
pip install -r requirements.txt

# creation du ficher server.py
touch server.py

# variable global + lancement
export FLASK_APP=server.py
flask run

# mode debug
python server.py

# template jinja2
dossier templates

# assets
static avec une route