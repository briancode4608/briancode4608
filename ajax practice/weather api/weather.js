
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempimg = document.getElementById('tempimg');
const description = document.getElementById('description');
const tempmax = document.getElementById('tempmax');
const tempmin = document.getElementById('tempmin');

months = ['january','february','march','april','may','june','june','july','august','september','october','november','december'];

// 
let dateObj = new Date();
let month = months[date.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day} , ${year} `;

const app = document.getElementById('app');

const getWeather = async () => {
  try{
    const weatherDataFetch = await fetch ('', {
      headers:{
        accept:"applicatio/json"
      }
    });

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    city.innerHTML =` ${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempimg.innerHTML = 


}
catch(error){
  console.log(error)
}

}

getWeather()

