import pandas as pd
from flask import Flask, jsonify
import psycopg2 as pg
import pandas as pd
from sqlalchemy import create_engine
from surprise import Dataset, Reader, KNNBasic
import asyncio
import random
import time

app = Flask(__name__)

# Construir as funcionalidades
@app.route('/')
def homepage():
	return 'A API está no ar'

@app.route('/um-treim-de-cume/indicacao')
async def pegarvendas():
	# Substitua pelas suas próprias informações de conexão
    host = "bfei8escsg94jy6dk4gk-postgresql.services.clever-cloud.com"
    dbname = "bfei8escsg94jy6dk4gk"
    user = "ujhrqenft29mcpu7xvwx"
    password = "4xdZfWCSz5DyTldDnuoxqlMgWganMb"

    conn = await pg.connect(
        host=host,
        dbname=dbname,
        user=user,
        password=password
    )

    print("aqui")
    # Crie uma URI de conexão para o PostgreSQL
    conn_str = f"postgresql://{user}:{password}@{host}/{dbname}"

    # Crie uma conexão com o SQLAlchemy
    engine = await create_engine(conn_str)
    query_cousine = "select u.id as user_id, u.age as age, rest.cousine_type from requests r inner join restaurants rest on r.restaurant_id = rest.id inner join users u on r.user_id = u.id order by r.id;"


    query_food = "select u.id as user_id, m.food_name, u.age as age from requests r inner join menus m  on r.food_id = m.id inner join users u on r.user_id = u.id order by r.id;"

    df_sql_cousine = await pd.read_sql_query(query_cousine, con=engine)
    df_sql_food = await pd.read_sql_query(query_food, con=engine)


    await conn.close()

    data = df_sql_cousine

    data.loc[data['age'] == '18-', 'age'] = 1
    data.loc[data['age'] == '18 e 25', 'age'] = 2
    data.loc[data['age'] == '25 e 30', 'age'] = 3
    data.loc[data['age'] == '30 e 40', 'age'] = 4
    data.loc[data['age'] == '40 e 60', 'age'] = 5
    data.loc[data['age'] == '60+', 'age'] = 6

    # Crie um DataFrame Pandas com os dados
    df = await pd.DataFrame(data)

    # Defina o formato do leitor
    reader = await Reader(rating_scale=(1, 6))

    # Carregue o conjunto de dados
    data = await Dataset.load_from_df(df[['user_id', 'cousine_type', 'age']], reader)

    # Construa o conjunto de treinamento
    trainset = await data.build_full_trainset()

    # Crie o modelo KNN
    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = await KNNBasic(sim_options=sim_options)

    await model.fit(trainset)

    # ID do filme para o qual você deseja obter recomendações
    cousine_type = "CHURRASCO"

    # Obtendo as recomendações para o filme
    age_inner_id = await trainset.to_inner_iid(cousine_type)
    neighbors = await model.get_neighbors(age_inner_id, k=1)

    # Mapeando os IDs internos de volta para os IDs reais dos filmes
    neighbors = [trainset.to_raw_iid(inner_id) for inner_id in neighbors]

    print(f"Quem pede culinária {cousine_type} Pode gostar também de:")
    for neighbor in neighbors:
        print(neighbor)

    data = df_sql_food

    data.loc[data['age'] == '18-', 'age'] = 1
    data.loc[data['age'] == '18 e 25', 'age'] = 2
    data.loc[data['age'] == '25 e 30', 'age'] = 3
    data.loc[data['age'] == '30 e 40', 'age'] = 4
    data.loc[data['age'] == '40 e 60', 'age'] = 5
    data.loc[data['age'] == '60+', 'age'] = 6

    # Crie um DataFrame Pandas com os dados
    df = await pd.DataFrame(data)

    # Defina o formato do leitor
    reader = await Reader(rating_scale=(1, 6))

    # Carregue o conjunto de dados
    data = await Dataset.load_from_df(df[['user_id', 'food_name', 'age']], reader)

    # Construa o conjunto de treinamento
    trainset = await data.build_full_trainset()

    # Crie o modelo KNN
    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = await KNNBasic(sim_options=sim_options)

    model.fit(trainset)

    # ID do filme para o qual você deseja obter recomendações
    food_name = "Picanha"

    # Obtendo as recomendações para o filme
    age_inner_id_by_food = await trainset.to_inner_iid(food_name)
    neighborsByfood = await model.get_neighbors(age_inner_id_by_food, k=3)

    # Mapeando os IDs internos de volta para os IDs reais dos filmes
    neighborsByfood = [trainset.to_raw_iid(inner_id) for inner_id in neighborsByfood]

    cousine_indication = []
    food_indication = []
    print(f"Hum, você escolheu um delicioso {food_name} Acreditamos que pode gostar também de:")
    for neighbor in neighborsByfood:
        cousine_indication.push(neighbor)
        print(neighbor)
    print(f"\nE já que pediu um prato do tipo {cousine_type} talvez também queira explorar a culinária")
    for neighbor in neighbors:
        food_indication.push(neighbor)
        print(neighbor)

    return "teste"

# Roda a nossa API
if __name__ == '__main__':
    app.run(host='0.0.0.0')