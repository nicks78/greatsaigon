import React from "react";
import {PUBLIC_URL} from '../../api/constant'
import Link from "next/link";
import Router from "next/router";

const Dropdown = props => {
  const { menu } = props;

  const handleSearch = ( href, as ) => {
    window.location.href = `${PUBLIC_URL}${as}`
  }

  const loopMenu = (menu, x, y) => {
    return menu.slice(x, y).map((x, index) => {
      return (
        <div key={index} style={{ marginBottom: "20px", color: "#000" }}>
          <Link
            as={`/search-page/${x.slug}/district-1/1`}
            href={`/search-page?directory=${ x.slug }&where=1&what=1`}
          >
            <p className="directories">
              {x.name}
              <i className="uk-float-right" data-uk-icon="check" />
            </p>
          </Link>

          {x.subdirectory.map((z, index) => {
            var as = `/search-page/${x.slug}/1/${z.slug}`;
            var href = `/search-page?directory=${ x.slug }&where=1&what=${z.slug}`;
            return (
              <p
                key={index}
                onClick={() => {
                  return handleSearch(href, as);
                }}
                className="uk-button-text"
                style={{ color: "black", margin: "0px 0px 0px 20px" }}
              >
                {z.name}
                <br />
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div
      className="uk-animation-slide-top-small"
      style={{
        backgroundColor: "#FFF",
        height: "auto",
        width: "80%",
        padding: "2em",
        margin: "0 auto",
        boxShadow: "5px 5px 18px 0px #888888",
        marginBottom: "10px"
      }}
    >
      <div className="uk-child-width-1-4" data-uk-grid>
        <div>{loopMenu(menu, 0, 3)}</div>

        <div style={{ paddingLeft: "30px" }}>{loopMenu(menu, 3, 7)}</div>
        <div style={{ paddingLeft: "30px" }}>{loopMenu(menu, 7, 8)}</div>

        <div style={{ paddingLeft: "30px" }}>{loopMenu(menu, 8)}</div>
      </div>
      <style jsx global>{`
        .directories {
          border-bottom: 1px solid red;
        }
        p:hover {
          cursor: pointer;
        }
        .directories {
          transition: 0.2s linear;
        }
        .directories:hover {
          color: red;
        }
        .uk-button-text::before {
          border-bottom: 1px solid red;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
