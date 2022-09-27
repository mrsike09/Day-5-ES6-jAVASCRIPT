let request = require('request');

let apiKey = '1257d7440e0072c6bf38e38755f38af8';

const CITIES = [
    'Kolkata',
    'Bangalore',
    'Lucknow',
    'Allahabad',
    'Delhi',
    'Hyderabad'
];

const city = CITIES[Math.floor(Math.random() * CITIES.length)];

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url,function(err,response,body){
    console.log("Fetching the weather information.....");
    if(err){
        console.log("There was an error getting the weather....");
    }else{
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!!!`;
        console.log(message)
    }
    greet();
});

function greet(){
    console.log("Weather Fetched....");
}

