import { useState, useEffect } from 'react';
import CityDetail from './CityDetail';

function City({ location, lat, lon }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7bc16c0729cca345cb0ed321168a34eb&units=imperial`
  function loadCity() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setHumidity(data.main.humidity);
        setVisibility(data.visibility);
      });
  }
  const [temp, setTemp] = useState([]);
  const [description, setDescription] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [visibility, setVisibility] = useState([]);
  const [detailPopup, setDetailPopup] = useState(false);



  useEffect(() => { loadCity() });

  return (
    <div className='cities' onClick={() => setDetailPopup(!detailPopup)}>
      <h2>{location}</h2>
      <h5>temperature: {temp}°F</h5>
      <CityDetail location={location} temp={temp} description={description} humidity={humidity} visibility={visibility} trigger={detailPopup} setTrigger={setDetailPopup}>
      </CityDetail>
    </div>
  )
}

export default City;
