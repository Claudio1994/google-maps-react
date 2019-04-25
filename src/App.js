import React, { Component } from 'react';
import './map.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latlng: '-33.453484,-70.652964',
      zoom: '15'
    }
    this.marker = '';
  }

  addMarker = (location, map) => {
    if(this.marker){
      this.marker.setMap(null);
    }

    this.marker = new window.google.maps.Marker({
      position: location,
      map: map
    });
    this.marker.setMap(map);
  }

  componentDidMount = () =>{
    let map = new window.google.maps.Map(document.getElementById("map"),{
      center: {lat: -33.884187, lng: -71.021867},
      zoom: 3
    });

    let _this = this;
    map.addListener('click', function(event) {
      _this.setState({
        latlng: event.latLng
      });

      _this.addMarker(event.latLng, map);
    });
  }

  

  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Buscador</h2>
            <p>Haz click en el mapa izquierdo y el mapa derecho se actualizará</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
          
            <div id="map"></div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <iframe
            width="100%"
            height="400px"
            frameborder="0" style={{border:0}}
            src={`https://www.google.com/maps/embed/v1/place?key=
              yourKey
              &q=${this.state.latlng}
              &zoom=15`}>
          </iframe> 
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          
          </div>
        </div>
      </div>
    );
  }
}




export default App;
