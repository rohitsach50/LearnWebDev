import React from 'react'
import { lat_long } from './latlong';
import Options from './Options';
 



const Select = () => {
  return (
    <div>
      <select name="city" id="city">
        <Options station_name={lat_long[0].station_name} />
        <Options station_name={lat_long[1].station_name} />
        <Options station_name={lat_long[2].station_name} />
        <Options station_name={lat_long[3].station_name} />
        <Options station_name={lat_long[4].station_name} />
        <Options station_name={lat_long[5].station_name} />
        <Options station_name={lat_long[6].station_name} />
        <Options station_name={lat_long[7].station_name} />

      </select>

    </div>
  )
}

export default Select