// const APIURL = 'https://www.metaweather.com/api/';


// async function getWeatherByLocation(location){
//     const resp = await fetch(APIURL + "location/search/?query=" + location, {});
//     const respData = await resp.json();

//     console.log(respData);
// }


// getWeatherByLocation('London');



window.addEventListener('load', ()=> {

 let long ;
 let lat ;


 if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position =>{

        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(position);

    });
     
 }else{
     h1.textContent = "hey this page is rquered your location "
 }


});


 