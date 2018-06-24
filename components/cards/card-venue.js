import React from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {DEFAULT_IMG, GRAB_LOGO} from '../../api/constant'



const CardVenue = ({venue}) => {



  var image     = venue.img ? venue.img.path : DEFAULT_IMG
  var slug      = venue.slug;
  var name      = venue.name;
  var type      = venue.type.name;
  var id        = venue.id;
  var address   = venue.address;
  var ward      = venue.ward
  var district  = venue.district

  return (
    <Link as={`/profile-venue/${slug}/${id}`} href={`/profile-venue/?=slug${slug}/?id=${id}`}>
      <div className='card-container'>
      <div className='uk-card'>
        <div className='imgCard' style={{backgroundImage: `url(${image})`}}></div>
        <div>
          <h2 className='card-title'>{name}</h2>
          <hr className="uk-divider-icon"/>
          <button style={{backgroundImage: `url(${GRAB_LOGO})`}}className='grabButton'></button>
          <ul className="card-venue-detail">
            <li className="card-venue-list">
              <span className='card-venue-title'>Type: </span><span>{name}</span>
            </li>
            <li className="card-venue-list">
              <span className='card-venue-title'>District: </span><span>{district}</span>
            </li>
            <li className="card-venue-list">
              <span className='card-venue-title'>Address: </span><span>{address}</span>
            </li>
          </ul>
          </div>
            <button className="show-more-btn">Show more</button>
        </div>
      <style jsx global>
      {
        `
          .show-more-btn {
            width: 100%;
            border-radius: 0%;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-left: 1px;
            background-color: red;
            border: 2px solid red;
            color: #fff;
            font-size: 16px;
          }
          .show-more-btn:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          .card-container {
            padding-left: 10px;
            padding-bottom: 10px;
            padding-top: 10px;
          }
          .uk-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            background-color: #fff;
            border: 1px solid #DDD;
            transition: all 0.5s ease-in-out 0.1s;
          }

          .uk-card:hover {
            cursor: pointer;
            border: 2px solid red;
          }
          .card-venue-detail {
            list-style-type: none;
          }
          .card-venue-list {
            display: flex;
            flex-wrap: nowrap;
          }
          .card-venue-title {
            width: 150px;
          }
          .imgCard {
            width: 100%;
            height: 300px;
            border: 1px solid #DDD;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: all 0.5s ease-in-out 0.1s;
          }
          .imgCard:hover {
            height: 350px;
          }
          .card-title {
            text-align: center;
          }
          h4 {
            margin-left: 10px;
          }
          .grabButton {
            position: absolute;
            visibility: hidden;
            top: 60%;
            right: 5px;
            background-color: #00B140;
            border-color: #00B140;
            border-radius: 6px;
            width: 130px;
            height: 35px;
            cursor: pointer;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            box-shadow: 5px 1px 18px #888888;
          }
          .grabButton:focus {
            box-shadow: 5px 10px 18px #888888;
            background-color: #00B140;
            outline: none;
          }
          @media screen and (max-width: 996px) {
            .uk-card{
              display: grid;
              grid-template-columns: 1fr;
            }
            .grabButton {
              visibility: visible;
            }
            .card-container {
              padding: 0px;
            }
          }
        `
      }
        </style>
    </div>
    </Link>
    )
}

export default CardVenue;
