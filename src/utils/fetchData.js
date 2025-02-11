export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
     
      
      'X-RapidAPI-Key':import.meta.env.VITE_RAPID_API_KEY,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY,
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };




  // const options = {
  //   method: 'GET',
  //   hostname: 'exercisedb.p.rapidapi.com',
  //   port: null,
  //   path: '/status',
  //   headers: {
  //     'x-rapidapi-key': '2233b6b62bmsh886aa8ef4468ebbp12c6a4jsn8b3b278412f5',
  //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  //   }
  // };
  