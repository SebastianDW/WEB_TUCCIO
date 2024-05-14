from flask import Flask,render_template
#flask --app index run, donde index es el nombre del archivo
app = Flask(__name__)#verfiica que está en el archivo main
#http://127.0.0.1:5000

@app.route('/')
def principal():
    #return render_template('index.html')
    render_template('base.html')

@app.route('/form_popup')
def principal_form_popup():
    return render_template('formulario_consulta_pop_up.html')

@app.errorhandler(404)
def pagina_no_encontrada(error):
    return render_template('404.html'),404

if __name__ == '__main__':
    app.run(debug=True)