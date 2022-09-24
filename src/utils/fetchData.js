export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f28926da19msh1988081ee23c4b3p1e2ebajsn42c3e903f8f2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f28926da19msh1988081ee23c4b3p1e2ebajsn42c3e903f8f2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);//here you put option that will have a method and other autm data like key abd host address
  const data = await response.json();
  return data;
};
