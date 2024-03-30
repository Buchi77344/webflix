import requests

tmdb_api_key = '84cce1176ec500693be04f9ce60273de'
tmdb_base_url = 'https://api.themoviedb.org/3'

def get_latest_movie():
    url = f'{tmdb_base_url}/movie/now_playing'
    params= {
        'api_key':tmdb_api_key
    }
    response =requests.get(url, params=params)
    if response.status_code == 200:
        return response.json().get('results', [])
    else:
        return []
 

 