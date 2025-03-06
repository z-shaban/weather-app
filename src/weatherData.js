const country = document.querySelector('#country');
const button = document.querySelector('#searchCountry');

function getWeatherData() {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(country.value)}?key=HND7XX5J6AAW63YCCSLTJ86WZ`,
    { mode: 'cors' }
  )
    .then(function (response) {
      if (!response.ok) {
        console.log('country not found');

        throw new Error(`HTTP error! Status:${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      console.log(response);
      console.log(response.address);
      console.log(response.currentConditions);
      const weatherDetails = {
        address: response.resolvedAddress,
        datetime: response.currentConditions.datetime,
        temp: response.currentConditions.temp,
        icon: response.currentConditions.icon,
        description: response.description,
      };
      return weatherDetails;
    })
    .then((weatherDetails) => console.log(weatherDetails))
    .catch((err) => {
      console.log(err.message);
    });
}

export function searchButton() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    getWeatherData();
  });
}
