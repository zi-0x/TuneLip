const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '02611b6d24mshd32505fbc25f2fap192ed1jsn954321a4cc43',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));