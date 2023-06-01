const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const apiURL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }

  return data;
};

export const searchSevenDays = async (term) => {
  const apiURL = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${term}&days=7`;
  const response = await fetch(apiURL);
  let data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }

  data = data.forecast.forecastday.map((preview) => {
    const { date } = preview;
    const maxTemp = preview.day.maxtemp_c;
    const minTemp = preview.day.mintemp_c;
    const { text, icon } = preview.day.condition;
    return { date, maxTemp, minTemp, condition: text, icon };
  });
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const urlForecast = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL.url}`;
  const responses = await fetch(urlForecast);
  const datas = await responses.json();
  const { name, country } = datas.location;
  const { text, icon } = datas.current.condition;
  const temp = datas.current.temp_c;
  const { url } = cityURL;
  return { name, country, condition: text, temp, icon, url };
};

// console.log(getWeatherByCity('belo-horizonte-belo-horizonte-brazil'));
