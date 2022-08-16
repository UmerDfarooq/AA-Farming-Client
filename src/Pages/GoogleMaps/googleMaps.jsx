// import React from 'react';
//  import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// function GoogleMaps() {
//   return (
//     <div>
//     <Map google={this.props.google} 
//          style={{width:'100%',height:'100%'}} 
//          zoom={14} 
//          initialCenter={
//       {
//         lat: 28.704060,
//         lng:77.102493
//       }
//     }>
    
     
//       <Marker onClick={this.onMarkerClick}
//              name={'Current location'} />
    
//      <InfoWindow onClose={this.onInfoWindowClose}>
//          <div>
//            <h1>{this.state.selectedPlace.name}</h1>
//          </div>
//      </InfoWindow>
//     </Map>
    
//         </div>
//   )
// }


// export default GoogleApiWrapper({
//     apiKey: (AIzaSyDqwruV_OAve0GczEJd8JgXGpjdyH3ofyU)
//   })(GoogleMaps)

import React from 'react'
import Map from './Maps';

function GoogleMaps() {
  return (
    <div> <Map zoom={15} center={{lat:33.6784501,lng:73.2988849}}/></div>
  )
}

export default GoogleMaps