import React from "react";
import Link from "next/link";
import { DEFAULT_IMG, GRAB_LOGO } from "../../api/constant";

const shortDesc = (desc, maxLength) => {
  var trimmedString = desc.substr(0, maxLength);
  return (trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  ));
};

const CardVenue = ({ venue }) => {
  var image = venue.img ? venue.img.path : DEFAULT_IMG;
  var slug = venue.slug;
  var name = venue.name;
  var id = venue.id;
  var address = venue.address;
  var ward = venue.ward;
  var district = venue.district;
  let description;
  venue.description !== ""
    ? (description = shortDesc(venue.description, 100))
    : (description =
        "Among Saigon’s myriad relaxation and entertainment destination, this is a great place to chill out, enjoy the unique city scenery and give yourself a special treat");

  return (
    <div className="">
      <div className="uk-card">
        <Link
          as={`/profile-venue/${slug}/${id}`}
          href={`/profile-venue/?=slug${slug}/?id=${id}`}
        >
          <div
            className="imgCard"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
        <div className="gs-card-content">
          <Link
            as={`/profile-venue/${slug}/${id}`}
            href={`/profile-venue/?=slug${slug}/?id=${id}`}
          >
            <h2 style={{ textAlign: "left" }} className="card-title">
              {name}
            </h2>
          </Link>
          <img
            style={{ width: "30px" }}
            src="https://greatsaigon.com/content/images/greatsaigon-marker-map.png"
          />
          <span className="uk-text-muted">
            {address} <span data-uk-icon="location" /> District {district}
          </span>
          <hr className="uk-divider-icon" />
          <div className="desc">
            {description}
            <Link
              as={`/profile-venue/${slug}/${id}`}
              href={`/profile-venue/?=slug${slug}/?id=${id}`}
            >
              <span className="btn_read_more">...Read More</span>
            </Link>
          </div>
          {/* <button style={{backgroundImage: `url(${GRAB_LOGO})`}}className='grabButton'></button> */}
        </div>
        {/* <button className="show-more-btn">Show more</button> */}
      </div>

      <style jsx global>
        {`
          .card-container {
            padding-left: 10px;
            padding-bottom: 7px;
            padding-top: 10px;
          }
          .uk-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            box-shadow: 0px 0px 44.16px 1.84px rgba(0, 0, 0, 0.14);
            background-color: #fff;
            border: 1px solid #ddd;
            transition: all 0.5s ease-in-out 0.1s;
          }
          .uk-card:hover {
            border: 2px solid #f50633;
          }

          .card-title {
            padding-top: 32px;
            color: #101820;
            font: 22px/28px "Calibre-Large";
            letter-spacing: 0.086em;
            text-transform: uppercase;
            line-height: 28px;
          }
          .card-title:hover {
            color: #f50633;
            cursor: pointer;
          }
          .gs-card-content {
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
          }
          .desc {
            font-family: Roboto, "Helvetica Neue", sans-serif;
          }
          .btn_read_more {
            font-weight: 100;
            vertical-align: initial;
            line-height: 0;
            font-size: 0.875rem;
            padding: 0px;
            color: #f50633;
          }
          .btn_read_more:hover {
            color: rgb(255, 130, 114);
            cursor: pointer;
            text-decoration: underline;
          }
          .venue-sub-information {
            display: grid;
            grid-template-columns: 1fr 1fr;
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
          .imgCard {
            width: 100%;
            height: 300px;
            border: 1px solid #ddd;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: all 0.5s ease-in-out 0.1s;
          }
          .imgCard:hover {
            cursor: pointer;
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
            background-color: #00b140;
            border-color: #00b140;
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
            background-color: #00b140;
            outline: none;
          }
          @media screen and (max-width: 996px) {
            .uk-card {
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
        `}
      </style>
    </div>
  );
};

export default CardVenue;
