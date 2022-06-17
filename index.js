const API_KEY = `a18f3ea44fae38dcbfeafa51df14bb8b`;
const successFn = (posi) =>{
      const {latitude, longitude} = posi.coords;
      console.log(`${latitude}, ${longitude}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      .then((resposne) => resposne.json())
      .then((data) => {
            console.log(data);
            const time = new Date(); 
            document.querySelector('.mintemp').innerHTML += data.main.temp_min;
            document.querySelector('.maxtemp').innerHTML += data.main.temp_max;
            document.querySelector('.location').innerHTML += data.name;
            document.querySelector('.check').innerHTML += data.sys.country;
      });
}

const errorFn = (err) =>{

}
navigator.geolocation.getCurrentPosition(successFn, errorFn)