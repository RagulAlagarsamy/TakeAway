import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
    constructor(){
        super();
        this.state={
            latitude:59.95,
            long:30.33
        }
    }

//   static defaultProps = {
//     center: {
//       lat:  this.state.lat ,
//       lng:  this.state.long
//     },
//     zoom: 11
//   };

  render() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude); 
        console.log("Longitude is :", position.coords.longitude);
        console.log(this.state);
        this.setState({ latitude: position.coords.latitude})
    });
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "googleapi"}}
          defaultCenter={this.props.center}
          defaultZoom="11"
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
