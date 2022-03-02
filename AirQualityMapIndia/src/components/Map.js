import React, { useState, useEffect} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
// let arr = require('./mapTest.json')
// let url = "https://app.cpcbccr.com/caaqms/caaqms_landing_map_all";
// let data = "eyJyZWdpb24iOiJsYW5kaW5nX2Rhc2hib2FyZCJ9"
// let mapData=arr.map["station_list"]
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude: -78.9629,
    width: '100vw',
    height: "100vh",
    zoom: 5
  });
  // console.log(mapData[0]["longitude"])
  // console.log(arr.map["station_list"][0]["longitude"])
  
//   const [arr,setArr]=useState([])
//   useEffect(()=>{
//   (async()=>{
//     const products = await fetch(url, {
//       method: "POST",
//       headers: {
//         'uthority': 'app.cpcbccr.com',
//         'pragma': 'no-cache',
//         'cache-control': 'no-cache',
//         'accept': 'q=0.8;application/json;q=0.9',
//         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36',
//         'content-type': 'pplication/x-www-form-urlencoded; charset=UTF-8',
//         'sec-gpc': '1',
//         'origin': 'https://app.cpcbccr.com',
//         'sec-fetch-site': 'same-origin',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-dest': 'empty',
//         'referer': 'https://app.cpcbccr.com/ccr/',
//         'accept-language': 'en-US,en;q=0.9',
//         'cookie': '_xsrf=5bee1e94d0dd4b759b4dd663a4baa7bb'
//       }, body: data
//     })
//     setArr(products)
//   })()
// },[])

  return (
    <div className="map-main-el">
      {/* <div id='map-el'>
        
      </div> */}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="tokenHere"
        mapStyle="mapbox://styles/rohitsach50/ckwkg30zm8rdv14oc4tmffjv0"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        
        {/* {mapData.map(loc => {
          <Marker key={["station_id"]} latitude={["latitude"]} longitude={["longitude"]}>
            <h2>here</h2>
          </Marker>
        })} */}
      </ReactMapGL>
    </div>
  )
};

export default Map;
