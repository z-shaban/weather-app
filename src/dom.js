const weatherContainer = document.querySelector('#weatherContainer');
export function displayWeather(weatherDetails) {
  const address = document.createElement('p');
  const datetime = document.createElement('p');
  const temp = document.createElement('p');
  const icon = document.createElement('p');
  const description = document.createElement('p');

  address.textContent = weatherDetails.address;
  datetime.textContent = weatherDetails.time;
  temp.textContent = weatherDetails.temp;
  icon.textContent = weatherDetails.icon;
  description.textContent = weatherDetails.description;

  weatherContainer.append(address, datetime, temp, icon, description);
}

export function displayErrorMessage() {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'country not found';
  weatherContainer.appendChild(errorMessage);
}
