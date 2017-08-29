import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'
import {receiveOwnersRequest} from '../actions/owners'




class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDog: false
    }
    console.log(props.google)
  }
  componentDidMount() {
    this.props.dispatch(receiveOwnersRequest())
  }
  onMarkerClick(props){
    this.setState({
      showDog: !this.state.showDog
    })
    console.log("hello");
    console.log("===>", props);
  }
  render() {

    const {showDog} = this.state
    return (
      <div>
        <h2>map</h2>
        <Map google={this.props.google} style={{
          width: '45%',
          height: '45%',
          position: 'relative',
          margin: '0 auto'}}
          className={'map'} zoom={13} fullscreenControl={true} containerStyle={{}} initialCenter={{
          lat: -41.2865,
          lng: 174.7762
        }}>
          {this.props.dogs.map((dog, k) => {
            if (dog.lat && dog.lng) {
              return <Marker key={k} onClick={this.onMarkerClick.bind(this)} title={dog.dog_name} position={{
                  lat: Number(dog.lat),
                  lng: Number(dog.lng)
                }}/>
            }
          })}
          {showDog && <ul>
            {this.props.dogs.map((dog, k) => {
              if (dog.lat && dog.lng) {
                return <li  key={k} title={dog.dog_name} position={{
                    lat: Number(dog.lat),
                    lng: Number(dog.lng)
                  }}>| Dog Name:{dog.dog_name}| Dog breed:{dog.breed}| Dog owner:{dog.owner_name} | Address:{dog.address}| Phone:{dog.phone}  </li>
              }
            })}
          </ul>}
        </Map>
      </div>
    );
  }
}

const WrappedComponent = GoogleApiWrapper({
  apiKey: "AIzaSyBtks1ielOp7wqVyIJNevVW-8SrmpSf8Pk"
})(MapContainer)

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  }
}
export default connect(mapStateToProps)(WrappedComponent)
// https://github.com/fullstackreact/google-maps-react/blob/master/README.md