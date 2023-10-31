from fastapi import FastAPI
import pandas as pd
from sqlalchemy import create_engine
from surprise import Dataset, Reader, KNNBasic
from typing import List
from decouple import config
import asyncio
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

app = FastAPI()

class IndicationResponse:
    def __init__(self, cousine_indication: List[str], food_indication: List[str]):
        self.cousine_indication = cousine_indication
        self.food_indication = food_indication

@app.get('/')
def homepage():
    return 'A API está no ar'

async def getIndication(cousine, food):
    # Substitua pelas suas próprias informações de conexão
    host = "bfei8escsg94jy6dk4gk-postgresql.services.clever-cloud.com"
    dbname = "bfei8escsg94jy6dk4gk"
    user = "ujhrqenft29mcpu7xvwx"
    password = "4xdZfWCSz5DyTldDnuoxqlMgWganMb"
    port= config('PORT')

    conn_str = f"postgresql://{user}:{password}@{host}:{port}/{dbname}"
    engine = create_engine(conn_str)

    query_cousine = "select u.id as user_id, u.age as age, rest.cousine_type from requests r inner join restaurants rest on r.restaurant_id = rest.id inner join users u on r.user_id = u.id order by r.id;"
    query_food = "select u.id as user_id, m.food_name, u.age as age from requests r inner join menus m on r.food_id = m.id inner join users u on r.user_id = u.id order by r.id;"

    df_sql_cousine = pd.read_sql_query(query_cousine, con=engine)
    df_sql_food = pd.read_sql_query(query_food, con=engine)

    data = df_sql_cousine
    data.loc[data['age'] == '18-', 'age'] = 1
    data.loc[data['age'] == '18 e 25', 'age'] = 2
    data.loc[data['age'] == '25 e 30', 'age'] = 3
    data.loc[data['age'] == '30 e 40', 'age'] = 4
    data.loc[data['age'] == '40 e 60', 'age'] = 5
    data.loc[data['age'] == '60+', 'age'] = 6

    df = pd.DataFrame(data)
    reader = Reader(rating_scale=(1, 6))
    data = Dataset.load_from_df(df[['user_id', 'cousine_type', 'age']], reader)
    trainset = data.build_full_trainset()

    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = KNNBasic(sim_options=sim_options)
    model.fit(trainset)

    cousine_type = cousine
    age_inner_id = trainset.to_inner_iid(cousine_type)
    neighbors = model.get_neighbors(age_inner_id, k=1)
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

    df = pd.DataFrame(data)
    reader = Reader(rating_scale=(1, 6))
    data = Dataset.load_from_df(df[['user_id', 'food_name', 'age']], reader)
    trainset = data.build_full_trainset()

    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = KNNBasic(sim_options=sim_options)
    model.fit(trainset)

    food_name = food
    age_inner_id_by_food = trainset.to_inner_iid(food_name)
    neighborsByfood = model.get_neighbors(age_inner_id_by_food, k=3)
    neighborsByfood = [trainset.to_raw_iid(inner_id) for inner_id in neighborsByfood]

    cousine_indication = []
    food_indication = []
    print(f"Hum, você escolheu um delicioso {food_name} Acreditamos que pode gostar também de:")
    for neighbor in neighborsByfood:
        food_indication.append(neighbor)
    print(f"\nE já que pediu um prato do tipo {cousine_type} talvez também queira explorar a culinária")
    for neighbor in neighbors:
        cousine_indication.append(neighbor)

        # Criar uma instância da classe IndicationResponse
    response = IndicationResponse(cousine_indication, food_indication)
    responseJSON = jsonable_encoder(response)
    # Retornar a instância como resposta JSON
    return JSONResponse(content=responseJSON)

@app.get('/indicacao/{cousine}/{food}')
async def indicationReturn(cousine:str, food: str):
    return await getIndication( cousine, food)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
