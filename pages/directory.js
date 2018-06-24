import React from "react";
import { connect } from "react-redux";
import CardCategory from "../components/cards/card-category";
import { getList } from "../redux/data/actions";
import Layout from "../components/layout";
import Page from "../components/page";
import Loader from "../components/loader";
import { DEFAULT_IMG, GRAB_LOGO } from "../api/constant";
import Link from "next/link";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      directory: []
    };
  }

  componentDidMount() {
    var api = `venues`;
    this.props.getList(api);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url)
      this.setState({
        directory: nextProps.directory.list
      });
  }

  render() {
    if (this.props.directory.isFetching) {
      return <Loader />;
    }

    const { directory } = this.state;

    return (
      <Layout>
        <div className="uk-container">
          <div className="wrapper">
            {directory.map((item, i) => {
              if (item.type === "bar" || item.type === "restaurant")
                return (
                  <Link
                    key={i}
                    as={`/profile-venue/${item.slug}/${item.id}`}
                    href={`/profile-venue/?=slug${item.slug}/?id=${item.id}`}
                  >
                    <div
                      className="uk-card uk-card-default uk-card-hover uk-card-body"
                      style={{
                        backgroundImage: `url(${
                          item.img ? item.img.path : DEFAULT_IMG
                        })`
                      }}
                    >
                      <div className="uk-inlilne">
                        <img src="" alt="" />
                        <div className="uk-overlay uk-overlay-default uk-position-center">
                          <p className="title">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
            })}
          </div>
          <style jsx global>{`
            .wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 1em;
            }
            .uk-card {
              background-size: cover;
              background-position: center;
              height: 300px;
              margin-bottom: 10px;
              transition: all 0.2s ease-in-out 0.1s;
            }
            .uk-card:hover {
              cursor: pointer;
              border-bottom: 5px solid #f50633;
            }
            .title {
              font-size: 18px;
              font-weight: normal;
              color: #fff;
              text-align: center;
            }
            .uk-overlay {
              background: rgba(0, 0, 0, 0.5);
              border-radius: 20px;
              width: 88%;
              padding: 5px 2%;
            }
            @media (max-width: 960px) {
              .wrapper {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
// Get all data for child components
const mapStateToProps = state => {
  return {
    directory: state.dataReducer
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
  )(Directory)
);
