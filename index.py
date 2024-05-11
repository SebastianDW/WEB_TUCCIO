from flask import Flask,render_template
#flask --app index run, donde index es el nombre del archivo
app = Flask(__name__)#verfiica que está en el archivo main
#http://127.0.0.1:5000

@app.route('/')
def principal():
    return render_template('index.html')

@app.route('/contacto')
def principal_contacto():
    return render_template('contacto.html')

if __name__ == '__main__':
    app.run(debug=True)