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

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
