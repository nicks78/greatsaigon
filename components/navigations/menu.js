import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";
import locales from "../../locales/en.json";

const Menu = props => {
  const { showDropdown } = props;

  return (
    <nav className="uk-container" data-uk-navbar>
      <div className="uk-navbar-left uk-hidden@m">
        <ul className="uk-navbar-nav">
          <li>
            <a data-uk-toggle="target: #offcanvas-nav">
              <i className="fas fa-align-justify" />
            </a>
          </li>
        </ul>
      </div>
      <div className="uk-hidden@m" style={{ width: "40%", margin: "0 auto" }}>
        <a className="uk-navbar-item uk-logo" href="/">
          <img
            style={{ marginLeft: "-50px" }}
            src="https://greatsaigon.com/content/images/greatsaigon-logo.png"
            alt="logo"
            width="170px"
          />
        </a>
      </div>

      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo uk-visible@m" href="/">
          <img
            src="https://greatsaigon.com/content/images/greatsaigon-logo.png"
            alt="logo"
            width="170px"
          />
        </a>

        <ul
          className="uk-navbar-nav  uk-visible@m  boundery-align"
          style={{ color: "#000" }}
        >
          <li className="uk-visible@m">
            <Link as="/" href="/">
              <a style={{ color: "#000" }} className="gs_link_menu">
                {locales.home.toLowerCase()}
              </a>
            </Link>
          </li>

          <li className="uk-visible@m ">
            <a
              style={{ color: "#000" }}
              className="gs_link_menu"
              onClick={showDropdown}
            >
              {locales.explore}
            </a>
          </li>
          <li className="uk-visible@m">
            <Link
              as="/directory/restaurant-bar"
              href="/directory?name=food-and-drink"
            >
              <a style={{ color: "#000" }} className="gs_link_menu">
                {locales.restaurants_bars}
              </a>
            </Link>
          </li>
          <li className=" uk-hidden">
            uk-visible@m
            <Link as="/events" href="/events">
              <a style={{ color: "#000" }} className="gs_link_menu">
                {locales.events}
              </a>
            </Link>
          </li>
          <li className="uk-hidden">
            uk-visible@m
            <Link as="/articles" href="/articles">
              <a style={{ color: "#000" }} className="gs_link_menu">
                {locales.articles}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right uk-visible@m uk-hidden">
        <ul className="uk-navbar-nav">
          <Link as="/sign-up" href="/sign-up">
            <li className="Btn SignUp">
              <a>
                <span>
                  <i className="fas fa-user" />&nbsp;{locales.sign_up}
                </span>
              </a>
            </li>
          </Link>
          <Link as="/sign-in" href="/sign-in">
            <li className="Btn SignIn">
              <a>
                <span>
                  <i className="fas fa-power-off" />&nbsp;{locales.sign_in}
                </span>
              </a>
            </li>
          </Link>
        </ul>
      </div>
      <style jsx global>{`
        .Btn span {
          color: white;
          padding: 10px;
          border-radius: 24px;
        }
        .Btn:hover {
          opacity: 0.7;
        }
        .SignUp span {
          background-color: red;
        }
        .SignIn span {
          background-color: #f6a406;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
