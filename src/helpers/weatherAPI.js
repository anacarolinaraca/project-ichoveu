const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const apiURL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  if (data.length === 0) {
    return alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const urlForecast = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;
  const responses = await fetch(urlForecast);
  const datas = await responses.json();

  const { location: { name, country },
    current: { condition: { text: condicao, icon },
      temp_c: temperatura } } = datas;
  return { name, country, condicao, temperatura, icon };
};

// console.log(getWeatherByCity('belo-horizonte-belo-horizonte-brazil'));
