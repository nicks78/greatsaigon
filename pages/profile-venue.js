import React from 'react';
import {API_ENDPOINT} from '../api/constant'
import Layout from '../components/layout'
import Map from '../components/map'
import fetch from 'isomorphic-unfetch'



const VenueProfile = (props) => {

  const { venue } = props
  return (
  <Layout>

    <div className="googleMap">
      <Map result={venue} isSingle={true}/>
    </div>

    <div className='uk-container'>

      <div className='venue-container'>
        <div className="venue-image" style={{backgroundImage: `url(${venue.img.path})`}}></div>
        <div className="venue-item">
          <h3>{ venue.name}</h3>
          <hr />
          <ul className='venue-detail'>
            <li className='venue-list'>
              <span className='venue-icon'><i className="fas fa-map-marker"></i></span>
              <span className='venue-title'>Address</span>
            </li>
            <li className='venue-list'>
              <span className='venue-icon'><i className="far fa-compass"></i></span>
              <span className='venue-title'>Near</span>
            </li>
            <li className='venue-list'>
              <span className='venue-icon'><i className="far fa-clock"></i></span>
              <span className='venue-title'>Opening Hours</span>
            </li>
            <li className='venue-list'>
              <span className='venue-icon'><i className="fas fa-laptop"></i></span>
              <span className='venue-title'>Website</span>
            </li>
            <li className='venue-list'>
              <span className='venue-icon'><i className="fas fa-phone"></i></span>
              <span className='venue-title'>Phone</span>
            </li>
            <li className='venue-list'>
              <span className='venue-icon'><i className="far fa-file-alt"></i></span>
              <span className='venue-title'>Description</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <style jsx global>{
      `
      .googleMap {
        background-color: #DDD;
        height: 250px;
        width: 100%;
        text-align: center;
      }
      .venue-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid #DDD;
        border-left: 1px solid #DDD;
        border-right: 1px solid #DDD;
        box-shadow: 5px 1px 18px #DDD;
        padding: 8px;
      }
      .venue-image {
        height: 350px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .venue-item {
        padding-left: 8px;
      }
      h3 {
        text-align: center;
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
      }
      @media screen and (max-width: 996px) {
        .venue-container {
          display: grid;
          grid-template-columns: 1fr;
      }
      `
    }</style>
  </Layout>
)
}


VenueProfile.getInitialProps = async function(context) {

  const { id } = context.query
  const res = await fetch(`${API_ENDPOINT}venues/${id}`)

  const data = await res.json();

  return {
    venue: data
  }

}

export default VenueProfile;