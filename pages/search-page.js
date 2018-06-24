import React from "react";
import { connect } from "react-redux";
import Layout from "../components/layout";
import { getList } from "../redux/data/actions";
import SearchBar from "../components/search-bar";
import Map from "../components/map";
import CardVenue from "../components/cards/card-venue";
import Filter from "../components/filters/filter";
import Page from "../components/page";
import Loader from "../components/loader";
import axios from "axios";
import _ from "lodash";

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      what: "1",
      where: "",
      directory: "1",
      next: 10,
      prev: 0,
      page: 1,
      isToggle: false,
      stockResult: [],
      result: []
    };
  }

  componentWillMount() {
    if (this.props.url)
      this.setState({
        where: this.props.url.query.where,
        what: this.props.url.query.what,
        directory: this.props.url.query.directory
      }, () => {
        console.log('WHERE', this.state.where)
        var api = `venues/search?items=1000&page=1&what=${
          this.state.what
        }&directory=${this.state.directory}&where=${this.state.where}`;
        this.props.getList(api);
      });
  }

  componentDidMount() {
    

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url)
      this.setState({
        result: nextProps.result.list
      });
  }

  handleFilterButtons = event => {
    var filterIcons = event.target.getAttribute("name");
    var valueInput = event.target.value;
    var apiFilters = `https://backend.greatsaigon.com/api/v1/en/directories/${
      this.state.directory
    }/venues`;
    axios
      .get(apiFilters)
      .then(response => {
        let result;

        response.data.forEach(req => {
          if (filterIcons === "Hair") {
            if (req.options.beauty.hair.treatment !== "0") {
              req.options.beauty.hair.treatment.forEach(res => {
                if (res === valueInput) {
                  result = req;
                  this.state.stockResult.unshift(result);
                }
              });
            }
          } else if (filterIcons === "Nails") {
            if (req.options.beauty.nails.treatment !== "0") {
              req.options.beauty.nails.treatment.forEach(res => {
                if (res === valueInput) {
                  result = req;
                  this.state.stockResult.unshift(result);
                }
              });
            }
          } else if (filterIcons === "Spa & Massage") {
            if (req.options.beauty.spa.treatment !== "0") {
              req.options.beauty.spa.treatment.forEach(res => {
                if (res === valueInput) {
                  result = req;
                  this.state.stockResult.unshift(result);
                }
              });
            }
          }
        });

        this.setState({
          result: _.uniq(this.state.stockResult)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.stockResult);
    if (this.props.result.isFecthing) {
      return <Loader />;
    }
    if (!this.state.where || !this.state.what || !this.state.directory) {
      return <Loader />;
    }
    console.log('WHERE', this.state.where)
    const { where, what, directory, result, drop_what } = this.state;

    return (
      <Layout>
        <div className="wrapper-search-bar">
          <SearchBar what={what} where={where} directory={directory} />
        </div>

        <div className="content">
          <div data-uk-grid>
            {this.state.directory === "beauty" && (
              <div className="uk-width-auto@m">
                <Filter onClick={this.handleFilterButtons} />
              </div>
            )}
            <div
              style={{
                height: "100vh",
                overflow: "auto"
              }}
              className="gs-scroll-section uk-width-expand@m"
            >
              {!result.status ? (
                result.map((x, index) => {
                  return (
                    <div key={index} style={{ marginBottom: "10px" }}>
                      <CardVenue venue={x} />
                    </div>
                  );
                })
              ) : (
                <p>{result.msg}</p>
              )}
            </div>

            <div
              style={{ zIndex: "980" }}
              id="map"
              className="uk-width-1-3@m"
              data-uk-scrollspy="cls: uk-animation-slide-right; repeat: false"
            >
              {!result.status ? <Map result={result} isSingle={false} /> : null}
            </div>
          </div>
        </div>
        <style jsx global>
          {`
            .content {
              background-color: #f1f1f2;
              border-bottom: 1px solid #d0d2d3;
              margin: 1em auto;
              max-width: 100% !important;
            }
            .filters_icon {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
            .fas {
              cursor: pointer;
            }
            #map {
              height: 100vh;
            }
            @media (max-width: 960px) {
              .content {
                margin: 0 auto;
                width: 100%;
              }
              #map {
                display: none !important;
              }
              .gs-scroll-section {
                overflow: ;
              }
            }
          `}
        </style>
      </Layout>
    );
  }
}

// Get all data for child components
const mapStateToProps = state => {
  return {
    result: state.dataReducer
  };
};

// Get all data for child components
const mapDispatchToProps = dispatch => {
  return {
    getList: api => dispatch(getList(api))
  };
};

export default Page(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchPage)
);
