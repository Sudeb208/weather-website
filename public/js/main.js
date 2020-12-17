const submitbtn =document.getElementById("submitBtn");
const cityName =document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const tem=document.getElementById("tem");
const day=document.getElementById("day");
const tiday_data=document.getElementById("tiday_data");
const weatherLogo = document.getElementById("temo_status");

// city_name.innerText=`plz input the city name`;
const getInfo= async(event)=>{
    event.preventDefault();
    // window.alert("hi");
   let cityVal = cityName.value;
   console.log(city_name.innerText);
   if(cityName.value == ""){
      city_name.innerText=`plz input the city name`;
   }else{
     try{
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=39a654492a8dcac5b99bd67e5fc07752`;
        const response = await fetch(url);
        const data =await response.json();
        const arrdata =[data];
        console.log(data);
        tem.innerText=`${arrdata[0].main.temp}`;
        city_name.innerText=`${arrdata[0].name} , ${arrdata[0].sys.country}`;
        const weather = arrdata[0].weather[0].main;

        //change weather icon

        if(weather == "Rain"){
         weatherLogo.innerHTML= "<i class='fas fa-cloud-rain'></i>";
        }else if (weather == "Clouds"){
            weatherLogo.innerHTML="<i class='fas fa-cloud'></i>";
        }else {
            weatherLogo.innerHTML="<i class='fas fa-sun'></i>";
        }

     }catch{
        city_name.innerText=`plz input the city name proparly`;
     }

   }

}






submitbtn.addEventListener("click", getInfo);



//get date 


   let mounth = [ 'jan',
    '  feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
     ' aug',
      'sep',
     ' oct',
      'nov',
      'dec'   
   ]
   var d = new Date();
   var n = d.getMonth();
   var date = d.getDate();
   tiday_data.innerText = `${date} ${mounth[n].toUpperCase()}`;


   const days =["saturday", "Sunday", "Monday","Tuesday","Wednesday", "thursday", "Friday"];

   const dayName =d.getDay();

   day.innerText = `${days[dayName].toUpperCase()}`;

   
 

