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

 let locationtimezone = document.querySelector(".location-timezone");
 let temperature_description = document.querySelector(".temperature-description");
 let temperature_degree = document.querySelector(".temperature-degree");


 if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position =>{

        long = position.coords.longitude;
        lat = position.coords.latitude;
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
        
        fetch(api)
            .then(response => {

                return response.json();

                

            })

            .then(data =>{
                console.log(data);
                // let currenttemp = data.currently.temperature;
                // let Summary = data.currently.summary;
                // console.log(Summary);

             


                console.log(currenttemp);
                const {temperature , summary} = data.currently;

                temperature_degree.textContent = currenttemp;
            
                

            });
        


    });

}
     
 

});


 