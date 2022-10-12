function CityDetail(props) {
  return (props.trigger) ? (
    <div className='city-detail'>
      <div className='city-detail-inner'>
        <h2>{props.location}</h2>
        <h5>temperature: {props.temp}°F</h5>
        <h5>description:{props.description} </h5>
        <h5>humidity:{props.humidity}%</h5>
        <h5>visibility:{props.visibility}m</h5>
        <button className='close-btn' onClick={() => props.setTrigger(!props.trigger)}>close</button>
      </div>
    </div>
  ) : "";
}

export default CityDetail;
