import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {  
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':'63d21757f7msh459f162d12591a4p1c8bf0jsnb524087bafef',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};