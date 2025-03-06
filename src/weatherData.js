import { displayErrorMessage, displayWeather } from './dom';
const country = document.querySelector('#country');
const button = document.querySelector('#searchCountry');

/*asynchrounous code using promises*/
/*
export function getWeatherData() {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(country.value)}?key=HND7XX5J6AAW63YCCSLTJ86WZ`,
    { mode: 'cors' }
  )
    .then(function (response) {
      if (!response.ok) {
      displayErrorMessage();
        

        throw new Error(`HTTP error! Status:${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      
      const weatherDetails = {
        address: response.resolvedAddress,
        datetime: response.currentConditions.datetime,
        temp: response.currentConditions.temp,
        icon: response.currentConditions.icon,
        description: response.description,
      };
      displayWeather(weatherDetails);
      
    })

    .catch((err) => {
      console.log(err.message);
    });
}*/

export function searchButton() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    getWeatherData();
    country.value = '';
  });
}

/*asynchronous code using async/await*/
export async function getWeatherData() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(country.value)}?key=HND7XX5J6AAW63YCCSLTJ86WZ`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      displayErrorMessage();

      throw new Error(`HTTP error! Status:${response.status}`);
    }
    const data = await response.json();

    const weatherDetails = {
      address: data.resolvedAddress,
      datetime: data.currentConditions.datetime,
      temp: data.currentConditions.temp,
      icon: data.currentConditions.icon,
      description: data.description,
    };
    displayWeather(weatherDetails);
  } catch (err) {
    console.log(err.message);
  }
}
