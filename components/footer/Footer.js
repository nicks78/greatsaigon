import React from "react";
import SocialMedia from "./social-media";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="uk-container-expand">
        <div className="uk-container">
          <div className="footerContainer">
            <div>
              <img
                src="https://greatsaigon.com/content/images/greatsaigon-logo.png"
                alt="logo"
                width="170px"
              />
              <p>
                GreatSaigon provides sleek and clean listings that help you
                navigate in Saigon(HCMC), find the restaurant right to your
                taste, or occupy your time here with the most current event.<br />
                Based in the top robust and colorful city of Vietnam, we are a
                young, passionate team of expats and locals who are thriving for
                what’s up in town as well as keen on only genuine and selective
                content.
              </p>
            </div>
            <div>
              <h3 style={{ color: "#a6a6a6" }}>Company</h3>
              <ul>
                <li className="footerMenu">
                  <Link href="/about-us">
                    <a className="footerPages">About us</a>
                  </Link>
                </li>
                <li className="footerMenu">
                  <Link href="/privacy">
                    <a className="footerPages">Privacy</a>
                  </Link>
                </li>
                <li className="footerMenu">
                  <Link href="/contact-us">
                    <a className="footerPages uk-hidden">Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#a6a6a6" }}>Join Us</h3>
              <Link href="/sign-up">
                <a className="joinNow uk-hidden">
                  Join Now<i className="fas fa-sign-in-alt" />
                </a>
              </Link>
              <br />
              <SocialMedia />
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid #555" }} />
        <div className="uk-container">
          <p style={{ textAlign: "center", paddingBottom: "10px" }}>
            Copyright © 2017, GreatSaigon App, All Rights Reserved.
          </p>
        </div>
      </footer>
      <style jsx global>{`
        .uk-container-expand {
          color: #a6a6a6;
          background: #252525;
          padding-top: 50px;
        }

        .footerPages {
          color: #a6a6a6;
          border-bottom: 1px solid #555;
        }

        .footerPages:hover {
          color: #ff0000;
        }

        .footerContainer {
          text-align: center;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-gap: 1em;
          grid-auto-rows: minmax(100px, auto);
        }

        .footerMenu {
          position: relative;
          right: 14px;
          list-style-type: none;
        }

        .joinNow {
          position: relative;
          top: 3px;
          color: #fff;
          background-color: #ff0000;
          font-wieght: bold;
          padding: 10px 35px;
          border: 4px solid #ddd;
          border-radius: 25px;
          transition: all 0.5s ease-in-out 0.1s;
        }

        .joinNow:hover {
          color: #ddd;
          text-decoration: none;
          color: #ff0000;
          background-color: #fff;
          font-wieght: bold;
          padding: 10px 45px;
          border: 4px solid #ff0000;
          border-radius: 50px;
        }

        i {
          padding-left: 8px;
        }

        @media screen and (max-width: 996px) {
          .footerContainer {
            grid-template-columns: 1fr;
          }

          .uk-container-expand {
            margin-top: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
