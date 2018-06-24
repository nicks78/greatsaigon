/*global google*/
import React from "react";
import { compose, withProps } from "recompose";
import { GOOGLE_API } from "../../api/constant";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const marker = (item, props) => {
  var coordinate = item.coordinates.split(",");
  return (
    <Marker
      onMouseOver={() => {
        props.onMarkerIn(item);
      }}
      position={{
        lat: parseFloat(coordinate[0]),
        lng: parseFloat(coordinate[1])
      }}
      // icon="https://greatsaigon.com/Content/images/gs_icon.png"
      label={item.name.slice(0, 1)}
    >
      {props.isMarkerShown === item.id && (
        <InfoWindow onCloseClick={props.onMarkerOut}>
          <p style={{ minWidth: "100px" }}>
            <br />
            <span>{item.name}</span>
          </p>
        </InfoWindow>
      )}
    </Marker>
  );
};

// AIzaSyCohqkwd-MPh_pYfULL3GOnr_IupFfi5gs
const MyMapComponent = compose(
  withProps({
    googleMapURL: GOOGLE_API,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={props.initCoordonate}>
    {!props.isSingle ? (
      props.result.map((item, index) => {
        return <div key={index}> {marker(item, props)} </div>;
      })
    ) : (
      <div>{marker(props.result, props)} </div>
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    // this.delayedShowMarker()
  }

  handleMarkerIn = venue => {
    this.setState({ isMarkerShown: venue.id });
  };
  handleMarkerOut = venue => {
    this.setState({ isMarkerShown: false });
  };

  render() {
    // Set default zoom coordonate
    if (this.props.isSingle) {
      var coordinate = {
        lat: parseFloat(this.props.result.coordinates.split(",")[0]),
        lng: parseFloat(this.props.result.coordinates.split(",")[1])
      };
    } else {
      var coordinate = { lat: 10.775255, lng: 106.69576 };
    }
    return (
      <MyMapComponent
        result={this.props.result}
        isSingle={this.props.isSingle}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerIn={this.handleMarkerIn}
        onMarkerOut={this.handleMarkerOut}
        initCoordonate={coordinate}
      />
    );
  }
}

export default MyFancyComponent;
