import React from "react";
import { connect } from "react-redux";
import { DEFAULT_IMG } from "../api/constant";
import { getSingleObject } from "../redux/data/actions";
import Page from "../components/page";
import Layout from "../components/layout";
import Map from "../components/map";
import Loader from "../components/loader";

class VenueProfile extends React.Component {
  state = {
    venue: null
  };

  componentDidMount() {
    var api = `venues/${this.props.url.query.id}`;
    this.props.getSingleObject(api);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      venue: nextProps.venue.payload
    });
  }

  render() {
    if (this.props.venue.isFetching || this.state.venue === null) {
      return <Loader />;
    }
    const { venue } = this.state;

    return (
      <Layout>
        <div className="googleMap">
          <Map result={venue} isSingle={true} />
        </div>
        <div className="uk-container">
          <div className="venue-container">
            {/* <div className="venue-image" style={{backgroundImage: `url(${venue.img !== null ? venue.img.path : DEFAULT_IMG})`}}></div> */}

            {/* START SLIDER */}
            <div data-uk-slideshow="autoplay: true; autoplay-interval: 2500; animation: push">
              <div className="uk-position-relative uk-visible-toggle uk-light">
                <ul className="uk-slideshow-items">
                  {venue.images.map((image, x) => {
                    return (
                      <li key={x}>
                        <img src={image.path} data-uk-cover />
                      </li>
                    );
                  })}
                </ul>

                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover fas fa-chevron-left fa-2x"
                  href="#"
                  data-uk-slidenav-previous
                  data-uk-slideshow-item="previous"
                />
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover fas fa-chevron-right fa-2x"
                  href="#"
                  data-uk-slidenav-next
                  data-uk-slideshow-item="next"
                />
              </div>
              <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
            </div>

            <div className="venue-item">
              <h2>{venue.name}</h2>
              <hr />
              <ul className="venue-detail" data-uk-accordion>
                <li className="venue-list">
                  <span className="venue-icon">
                    <i className="fas fa-map-marker" />
                  </span>
                  <span className="venue-title">Address</span>
                  <span className="venue-data">{venue.address}</span>
                </li>
                <li className="venue-list">
                  <span className="venue-icon">
                    <i className="far fa-compass" />
                  </span>
                  <span className="venue-title">Near</span>
                  <span className="venue-data">
                    District
                    {venue.district + ", " + venue.ward + ", " + venue.city}
                  </span>
                </li>
                {/* <li className="venue-list">
                  <span className="venue-icon">
                    <i className="far fa-clock" />
                  </span>
                  <span className="venue-title">Opening Hours</span>
                  <span className="venue-data" />
                </li> */}
                {venue.website !== "" && (
                  <li className="venue-list">
                    <span className="venue-icon">
                      <i className="fas fa-laptop" />
                    </span>
                    <span className="venue-title">Website</span>
                    <span className="venue-data">
                      <a
                        target="_blank"
                        href={venue.website}
                        className="uk-button uk-button-primary uk-button-small"
                      >
                        Visit
                      </a>
                    </span>
                  </li>
                )}
                <li className="venue-list">
                  <span className="venue-icon">
                    <i className="fas fa-phone" />
                  </span>
                  <span className="venue-title">Phone</span>
                  <span className="venue-data">{venue.phone}</span>
                </li>
                {venue.description !== "" && (
                  <li className="venue-list">
                    <span className="venue-icon">
                      <i className="far fa-file-alt" />
                    </span>
                    <span className="venue-title">Description</span>
                    <span className="venue-data">
                      <br />
                      {venue.description}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <ul className="venue-sub-information">
              <li className="venue-list">
                <span className="venue-icon">
                  <i className="fas fa-car" />
                </span>
                <span className="venue-title">Parking Availability</span>
                <span className="venue-data">{venue.parking_availability}</span>
                {venue.parking_availability === "no" ? (
                  <i className="far fa-times-circle" />
                ) : (
                  <i className="far fa-check-circle" />
                )}
              </li>
              <li className="venue-list">
                <span className="venue-icon">
                  <i className="fas fa-smoking" />
                </span>
                <span className="venue-title">Smoking Area</span>
                <span className="venue-data">{venue.smoking}</span>
                {venue.smoking === "no" ? (
                  <i className="far fa-times-circle" />
                ) : (
                  <i className="far fa-check-circle" />
                )}
              </li>
              <li className="venue-list">
                <span className="venue-icon">
                  <i className="fas fa-credit-card" />
                </span>
                <span className="venue-title">Card Payment</span>
                <span className="venue-data">{venue.card_payment}</span>
                {venue.card_payment === "none" ? (
                  <i className="far fa-times-circle" />
                ) : (
                  <i className="far fa-check-circle" />
                )}
              </li>
            </ul>
            <style jsx global>{`
              .googleMap {
                background-color: #ddd;
                height: 250px;
                width: 100%;
                text-align: center;
              }
              .venue-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                border-top: 1px solid #ddd;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
                box-shadow: 5px 1px 18px #ddd;
                padding: 8px;
              }
              .venue-image {
                height: 350px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
              }
              .venue-item {
                padding-left: 5px;
              }
              h2 {
                text-align: center;
                color: #000;
                font-weight: 500;
              }
              hr {
                text-align: center;
              }
              .venue-detail {
                list-style-type: none;
              }
              .venue-list {
                display: flex;
                flex-wrap: nowrap;
              }
              .venue-icon {
                margin-right: 10px;
                width: 25px;
              }
              .venue-title {
                width: 150px;
                color: #000;
                font-weight: bold;
              }
              .venue-data {
                color: #000;
              }
              .venue-sub-information {
                display: grid;
                grid-template-columns: 1fr 1fr;
              }
              .fa-check-circle {
                color: green;
              }
              .fa-times-circle {
                color: red;
              }
              @media screen and (max-width: 996px) {
                .venue-container {
                  grid-template-columns: 1fr;
                }
                .venue-sub-information {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>
          </div>
        </div>
      </Layout>
    );
  }
}
// Get all data for child components
const mapStateToProps = state => {
  return {
    venue: state.dataReducer
  };
};

// Get all data for child components
const mapDispatchToProps = dispatch => {
  return {
    getSingleObject: api => dispatch(getSingleObject(api))
  };
};

export default Page(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VenueProfile)
);
