# -*- coding: utf-8 -*-
"""PI6_Um_Treim_di_Cumê - Tipo de Cozinha.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1oM6JQjUo10ccAeh7F_Dr2EAYlcxLqGFY

#Carregando o dataset
"""

from google.colab import drive
drive.mount('/content/drive')

# importando bibliotecas
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from pandas.plotting import scatter_matrix

#importando o arquivo
df = pd.read_csv('/content/drive/My Drive/DSM/datasetPI6.csv', sep=';')
df.head()

#informações do dataset
df.info()

"""#Tratamento de atributos com valores ausentes"""

# índices das linhas que contém valores NaN
idxRowNan = pd.isnull(df).any(1).to_numpy().nonzero()

# imprime apenas as linhas com valoes ausentes
display(df.iloc[idxRowNan])

"""#Gráfico de distribuição de valores de vendas por tipo de cozinha"""

# Agrupa os dados por tipo de cozinha e calcula a soma dos valores totais
cuisine_sales = df.groupby('cousine_type')['total_value'].sum().reset_index()

# Organiza os valores
sorted_cuisine_sales = cuisine_sales.sort_values('total_value', ascending=False)

# Gera do gráfico de tipo de cozinha e valores de vendas
plt.figure(figsize=(12, 8))
sns.barplot(x='total_value', y='cousine_type', data=sorted_cuisine_sales, palette='coolwarm')
plt.title('Valores de vendas por tipo de cozinha')
plt.xlabel('Total de valores de vendas')
plt.ylabel('Tipo de cozinha')
plt.show()

"""#Gráfico de distribuição de tipo de cozinha"""

# Gerar gráfico de distribuição de tipo de cozinha
order_counts = df['cousine_type'].value_counts()

plt.figure(figsize=(20, 6))
order_counts.plot(kind='bar', color='skyblue')
plt.title('Distribuição de pedidos por tipo de cozinha')
plt.xlabel('Tipo de cozinha')
plt.ylabel('Número de pedidos')
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()

"""# Gráfico do valor total médio por dia da semana ou final de semana"""

# Agrupa os dados por dia da semana e calcula o valor médio do valor total
day_of_week_avg = df.groupby('day_of_week')['total_value'].mean().reset_index()

# Organiza os valores
sorted_day_of_week_avg = day_of_week_avg.sort_values('total_value', ascending=False)

# Gera o gráfico
plt.figure(figsize=(8, 6))
sns.barplot(x='day_of_week', y='total_value', data=sorted_day_of_week_avg, palette='viridis')
plt.title('Média do total de valores por dia da semana')
plt.xlabel('Dia da semana')
plt.ylabel('VAlor total médio')
plt.show()

"""#Gráfico de distribuição por dias dias da semana"""

# Gerar gráfico de distribuição de dias da semana
order_counts = df['day_of_week'].value_counts()

plt.figure(figsize=(8, 6))
order_counts.plot(kind='bar', color='skyblue')
plt.title('Distribuição de pedidos por dias da semana')
plt.xlabel('Dia da semana')
plt.ylabel('Número de pedidos')
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()

"""#Gráfico de distribuição por gênero

"""

# Gerar gráfico de distribuição de gênero
order_counts = df['gender'].value_counts()

plt.figure(figsize=(8, 6))
order_counts.plot(kind='bar', color='skyblue')
plt.title('Distribuição de pedidos por gênero')
plt.xlabel('Gênero')
plt.ylabel('Número de pedidos')
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()

"""# Gráfico do quantidade de vendas por tipo de produto"""

# Agrupa os dados por tipo de produto e calcula a soma da quantidade
product_sales = df.groupby('type_of_product')['quantity'].sum().reset_index()

# Organiza os valores
sorted_product_sales = product_sales.sort_values('quantity', ascending=False)

# Gera o gráfico
plt.figure(figsize=(10, 6))
sns.barplot(x='quantity', y='type_of_product', data=sorted_product_sales, palette='pastel')
plt.title('Quantidade de itens vendidos por tipo de produto')
plt.xlabel('Quantidade de itens vendidos')
plt.ylabel('Tipo de produtos')
plt.show()

"""#Gráfico da quantidade de vendas por grupos etários"""

# Agrupa os dados por grupos etários calcula a soma da quantidade
product_sales = df.groupby('age')['quantity'].sum().reset_index()

# Organiza os valores
sorted_product_sales = product_sales.sort_values('quantity', ascending=False)

# Gera o gráfico
plt.figure(figsize=(10, 6))
sns.barplot(x='quantity', y='age', data=sorted_product_sales, palette='pastel')
plt.title('Quantidade de vendas por grupos etários')
plt.xlabel('Quantidade de vendas')
plt.ylabel('Grupos etários')
plt.show()

"""#Eliminação de atributos irrelevantes para a indicação de tipo de cozinha

"""

# remove as colunas irrelevantes para indicação de tipo de cozinha
df = df.drop(columns=['id_pedido','day_of_week', 'gender', 'id_restaurante', 'id_item', 'food_name', 'type_of_product', 'quantity', 'price', 'total_value'])

# imprime o dataframe
display(df.head(n=10))

"""#Mapa de calor mostrando relação dos grupos de idade e tipo de cozinha"""

# Mapa de calor com comparação de grupos d eidade a tipo de cozinha

age_cuisine_comparison = df.groupby('cousine_type')['age'].value_counts().unstack().fillna(0)

plt.figure(figsize=(12, 8))
sns.heatmap(age_cuisine_comparison, cmap='YlGnBu', annot=True, fmt='.0f')
plt.title('Comparação de grupos de idade e tipo de cozinha')
plt.xlabel('Idade')
plt.ylabel('Tipo de cozinha')
plt.show()

"""#Algoritmo de RECOMENDAÇÃO - KNN:"""

#Instação da biblioteca surprise
!pip install scikit-surprise

#Instalação biblioteca decouple
!pip install decouple

##Algoritmo de RECOMENDAÇÃO - KNN

from sqlalchemy import create_engine
from surprise import Dataset, Reader, KNNBasic
from typing import List


try:
    food = input(str("Digite o prato:\n"))
    cousine = input(str("Digite o tipo de culinária (em maiuscula):\n"))


    df_sql_cousine = pd.read_csv('/content/drive/My Drive/DSM/cousineType.csv', sep=';')
    df_sql_food = pd.read_csv('/content/drive/My Drive/DSM/preferenceByAge.csv', sep=';')

    data = df_sql_cousine
    data.loc[data['age'] == '18-', 'age'] = 1
    data.loc[data['age'] == '18 e 25', 'age'] = 2
    data.loc[data['age'] == '25 e 30', 'age'] = 3
    data.loc[data['age'] == '30 e 40', 'age'] = 4
    data.loc[data['age'] == '40 e 60', 'age'] = 5
    data.loc[data['age'] == '60+', 'age'] = 6
    df = pd.DataFrame(data)

    #Define o formato do leitor
    reader = Reader(rating_scale=(1, 6))

    #Carrega o conjutno de dados
    data = Dataset.load_from_df(df[['user_id', 'cousine_type', 'age']], reader)

    #Cria o conjunto de treinamento
    trainset = data.build_full_trainset()

    #Cria o modelo KNN
    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = KNNBasic(sim_options=sim_options)
    model.fit(trainset)

    #Tipo de cozinha escolhida pelo cliente
    cousine_type = cousine

    #Obtendo recomendações para tipo de cozinha
    age_inner_id = trainset.to_inner_iid(cousine_type)
    neighbors = model.get_neighbors(age_inner_id, k=1)

    #Mapeando os IDs internos de volta para os IDs reais
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

    #Define o formato do leitor
    reader = Reader(rating_scale=(1, 6))

    #Carrega o conjutno de dados
    data = Dataset.load_from_df(df[['user_id', 'food_name', 'age']], reader)

    #Cria o conjunto de treinamento
    trainset = data.build_full_trainset()

    #Cria o modelo KNN
    sim_options = {
        'name': 'cosine',
        'user_based': False
    }
    model = KNNBasic(sim_options=sim_options)
    model.fit(trainset)

    #Prato escolhido pelo cliente
    food_name = food

    #Obtendo recomendações para prato
    age_inner_id_by_food = trainset.to_inner_iid(food_name)
    neighborsByfood = model.get_neighbors(age_inner_id_by_food, k=3)

    #Mapeando os IDs internos de volta para os IDs reais
    neighborsByfood = [trainset.to_raw_iid(inner_id) for inner_id in neighborsByfood]
    cousine_indication = []
    food_indication = []
    for neighbor in neighborsByfood:
        food_indication.append(neighbor)

    for neighbor in neighbors:
        cousine_indication.append(neighbor)

    # Criar uma instância da classe IndicationResponse
    print (cousine_indication)
    print (food_indication)

except:
    print("ops, algo errado")