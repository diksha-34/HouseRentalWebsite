from flask import Flask,render_template,request
import pickle
import numpy as np
from flask_cors import CORS

df1 = pickle.load(open('Backend/df1.pkl','rb'))
nn_model = pickle.load(open('Backend/nn_model.pkl','rb'))
X = pickle.load(open('Backend/X.pkl', 'rb'))

app = Flask(__name__)
CORS(app)

@app.route('/recommend_houses',methods=['post'])
def recommend():
    user_input = int(request.json.get('user_input'))
    
    num_recommendations=5
    distances, indices = nn_model.kneighbors(X.iloc[[df1.index.get_loc(user_input)]].values.reshape(1, -1), n_neighbors=num_recommendations+1)
    recommended_indices = indices.squeeze()[1:]
    interested_house  =  df1.iloc[[df1.index.get_loc(user_input)]].dropna(axis=1)
    recommended_houses = df1.iloc[recommended_indices]
    dict_ = recommended_houses.to_dict(orient='index')
   
    response = {'suggestions': dict_}

    return response
 
if __name__ == '__main__':
    app.run(debug=True)