//pages/index.js

// Redux
// import Page from '../components/page'
// import {connect} from 'react-redux'

import Layout from "../components/layout.js";

import locales from "../locales/en.json";
import SearchBar from "../components/search-bar";

import Category from "../containers/category";
import Page from "../components/page";

const Index = props => {
  // Tmp data
  const carousels = [
    "http://hungthinhsale.com/wp-content/uploads/2016/08/Mia.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQyL5aaNmbu5EwHmt1u6gDpkkG7QOg3LwR4Kh7zSTtDflrmLN",
    "http://blisssaigon.com/wp-content/uploads/2018/05/Feature-event.jpg"
  ];

  // Previous Background
  // style={{backgroundImage: 'url(https://c1.staticflickr.com/9/8148/7644863446_5bace673c9_b.jpg)'}}

  return (
    <div>
      <Layout>
        <div className="header">
          <video
            style={{ width: "100%", zIndex: "-1", marginBottom: "0px" }}
            muted
            loop
            poster="https://greatsaigon.com/Videos/Thumbnail_Skyline.jpg"
            src="https://greatsaigon.com/content/videos/finalskyline-3.mp4"
            autoPlay="autoplay"
          />

          <div className="wrapper-search-bar">
            <SearchBar images={carousels} />
          </div>
        </div>

        <div className="event">
          <div className="uk-container">
            <h2 className="hero_title">{locales.title_event}</h2>

            <div
              style={{
                boxShadow:
                  "0 11px 22px rgba(0, 0, 0, 0.20), 0 7px 7px rgba(0, 0, 0, 0.24)"
              }}
              className="uk-position-relative uk-visible-toggle uk-light "
              data-uk-slideshow="autoplay: true"
            >
              <div className="uk-slideshow-items">
                {carousels.map((carousel, index) => {
                  return (
                    <div key={index}>
                      <img src={carousel} alt="" data-uk-cover />
                    </div>
                  );
                })}
              </div>
              <div
                className="uk-position-center-left uk-position-small"
                href="#"
                data-uk-slidenav-previous
                data-uk-slideshow-item="previous"
              >
                <i className="fas fa-caret-left fa-5x" />
              </div>
              <div
                className="uk-position-center-right uk-position-small"
                href="#"
                data-uk-slidenav-next
                data-uk-slideshow-item="next"
              >
                <i className="fas fa-caret-right fa-5x" />
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <Category />
        </div>
      </Layout>
      <style jsx global>{`
        .event {
          padding-top: 40px;
          padding-bottom: 40px;
          background-color: #f50633;
          margin-top: -50px;
        }
        .hero_title {
          color: #fff;
          font-weight: normal;
          text-align: center;
        }
        .uk-position-center-left {
          color: white;
        }
        .uk-position-center-right {
          color: white;
        }
        .slider-image {
          background-size: cover;
          background-position: center;
        }
        .wrapper-search-bar {
          text-align: center;
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          position: relative;
          bottom: 350px;
        }
        .content {
          margin: 1em auto;
          max-width: 1080px !important;
        }
        .CarouselHome {
          padding: 2em 0em 2em 0em;
        }
        @media (max-width: 960px) {
          .content {
            margin: 0 auto;
            width: 100%;
          }
          .header {
            height: auto;
            padding-bottom: 1em;
          }
          .wrapper-search-bar {
            width: 100%;
            padding-top: 1em;
            bottom: 0px;
          }
          .event {
            height: 300px;
            margin: 0px;
          }
          .CarouselHome {
            padding: 0em;
          }
        }
      `}</style>
    </div>
  );
};

// Get all data for child components
// const mapStateToProps = (state) => {

//   return {
//       menu: state.menuReducer,
//   }
// }

export default Page(Index);
