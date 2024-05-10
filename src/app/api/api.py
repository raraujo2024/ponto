from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import Error

db_host = "localhost"
db_name = "ponto"
db_user = "root"
db_password = "root"


try:
    connection = psycopg2.connect(
        user=db_user,
        password=db_password,
        host=db_host,
        database=db_name
    )
    cursor = connection.cursor()
    print("Conexão ao PostgreSQL bem-sucedida")

except (Exception, Error) as error:
    print("Erro ao conectar ao PostgreSQL:", error)


app = Flask(__name__)


@app.route('/save', methods=['POST'])
def save_object():
    data = request.json
    id = data.get('id')
    name = data.get('name')
    register = data.get('register')
    date = data.get('date')
    time1 = data.get('time1')
    time2 = data.get('time2')
    time3 = data.get('time3')
    time4 = data.get('time4')

    if not all([id, name, register, date, time1, time2, time3, time4]):
        return jsonify({'error': 'Por favor, forneça todos os campos'}), 400

    try:
 
        cursor.execute("""
            INSERT INTO tabela (id, name, register, date, time1, time2, time3, time4)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (id, name, register, date, time1, time2, time3, time4))
        connection.commit()
        return jsonify({'message': 'Objeto salvo com sucesso'}), 200

    except (Exception, Error) as error:
        return jsonify({'error': f'Erro ao salvar objeto: {error}'}), 500
    
@app.route('/objects', methods=['GET'])
def get_objects():
    try:

        cursor.execute("SELECT * FROM tabela")
        objects = cursor.fetchall()

        objects_json = [{'id': obj[0], 'name': obj[1], 'register': obj[2], 'date': obj[3], 'time1': obj[4], 'time2': obj[5], 'time3': obj[6], 'time4': obj[7]} for obj in objects]
        return jsonify(objects_json), 200

    except (Exception, Error) as error:
        return jsonify({'error': f'Erro ao obter objetos: {error}'}), 500

@app.route('/update/<int:id>', methods=['POST'])
def update_object(id):
    data = request.json
    field_to_update = data.get('field_to_update')
    new_time = data.get('new_time')

    if field_to_update not in ['time1', 'time2', 'time3', 'time4']:
        return jsonify({'error': 'Campo field_to_update inválido. Deve ser time1, time2, time3 ou time4'}), 400

    try:

        cursor.execute(f"UPDATE tabela SET {field_to_update} = %s WHERE id = %s", (new_time, id))
        connection.commit()
        return jsonify({'message': 'Objeto atualizado com sucesso'}), 200

    except (Exception, Error) as error:
        return jsonify({'error': f'Erro ao atualizar objeto: {error}'}), 500


if __name__ == '__main__':
    app.run(port=5000)
