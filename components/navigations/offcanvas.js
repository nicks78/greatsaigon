import React from "react";
import Link from "next/link";

const Offcanvas = props => {
  const { menu } = props;

  // if(menu === undefined || menu.length === 0){
  //     return <p>Loading...pop</p>
  // }

  return (
    <div id="offcanvas-nav" data-uk-offcanvas="mode: push">
      <div
        className="uk-offcanvas-bar"
        style={{ backgroundColor: "white", paddingTop: "0px" }}
      >
        <div style={{ margin: "20px 0px 20px 0px" }}>
          <img
            src="https://greatsaigon.com/content/images/greatsaigon-logo.png"
            alt="logo"
            width="170px"
          />
          <button
            style={{ color: "red" }}
            className="uk-offcanvas-close"
            type="button"
            data-uk-close
          />
        </div>

        <ul
          className="uk-nav uk-nav-default"
          data-uk-accordion="multiple: true"
        >
          <li>
            <Link href="/">
              <a style={{ color: "#000", borderBottom: "1px solid red" }}>
                Home
              </a>
            </Link>
          </li>
          <li style={{ marginTop: "0px" }} className="uk-hidden">
            <Link href="/events">
              <a style={{ color: "#000", borderBottom: "1px solid red" }}>
                Events
              </a>
            </Link>
          </li>
          <li style={{ marginTop: "0px" }} className="uk-hidden">
            <Link href="/articles">
              <a style={{ color: "#000", borderBottom: "1px solid red" }}>
                Articles
              </a>
            </Link>
          </li>
          {menu.map((x, index) => {
            return (
              <li
                key={index}
                className="uk-parent"
                onClick={() => {
                  document
                    .getElementById("offcanvas-nav")
                    .classList.remove("uk-open");
                }}
              >
                <Link key={index} as={x.slug} href={x.slug}>
                  <a style={{ color: "#000", borderBottom: "1px solid red" }}>
                    {x.name}
                    <i data-uk-icon="check" className="uk-float-right" />
                  </a>
                </Link>
                <ul className="uk-nav-sub">
                  {x.subdirectory.map((z, index) => {
                    return (
                      <Link key={index} as={z.slug} href={z.slug}>
                        <li className="link">
                          <a
                            className="link"
                            style={{ color: "#808080" }}
                            href="#"
                          >
                            {z.name}
                          </a>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Offcanvas;
