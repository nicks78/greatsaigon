import React from "react";
import StaticData from "../static-data/static-data";
import CardCategory from "../components/cards/card-category";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle1: false,
      isToggle2: false,
      isToggle3: false
    };
  }
  handleButton1 = () => {
    this.setState(prevState => ({
      isToggle1: !prevState.isToggle1
    }));
  };

  handleButton2 = () => {
    this.setState(prevState => ({
      isToggle2: !prevState.isToggle2
    }));
  };

  handleButton3 = () => {
    this.setState(prevState => ({
      isToggle3: !prevState.isToggle3
    }));
  };

  // You should use state to show more category with slice()
  render() {
    return (
      <div className="gridCategory">
        <br />

        <h1>{StaticData.Beauty.headings}</h1>
        <hr />
        <div className="uk-column-1-1 uk-column-1-3@l">
          {// Here you can map your different card and use slice to
          this.state.isToggle3 === false
            ? StaticData.Beauty.cardItems.slice(0, 3).map((item, index) => {
                return (
                  <CardCategory
                    key={index}
                    cateTitle="beauty"
                    title={item.title}
                    slug={item.slug}
                    image={item.img}
                  />
                );
              })
            : StaticData.Beauty.cardItems.slice(0, 6).map((item, index) => {
                return (
                  <CardCategory
                    key={index}
                    cateTitle="beauty"
                    title={item.title}
                    slug={item.slug}
                    image={item.img}
                  />
                );
              })}
        </div>
        <button onClick={this.handleButton3} className="moreButton">
          {this.state.isToggle3 === false ? "+more" : "-less"}
        </button>

        <h1>{StaticData.Restaurants.headings}</h1>
        <hr />
        <div className="uk-column-1-1 uk-column-1-3@l">
          {// Use card a component for styling
          // Use slice() to show more category
          this.state.isToggle1 === false
            ? StaticData.Restaurants.cardItems
                .slice(0, 3)
                .map((item, index) => {
                  return (
                    <CardCategory
                      key={index}
                      cateTitle="food-and-drink"
                      title={item.title}
                      slug={item.slug}
                      image={item.img}
                    />
                  );
                })
            : StaticData.Restaurants.cardItems
                .slice(0, 6)
                .map((item, index) => {
                  return (
                    <CardCategory
                      key={index}
                      cateTitle="food-and-drink"
                      title={item.title}
                      slug={item.slug}
                      image={item.img}
                    />
                  );
                })}
        </div>

        <button onClick={this.handleButton1} className="moreButton">
          {this.state.isToggle1 === false ? "+more" : "-less"}
        </button>

        <h1>{StaticData.GoingOut.headings}</h1>
        <hr />
        <div className="uk-column-1-1 uk-column-1-3@l">
          {// Here you can map your different card and use slice to
          this.state.isToggle2 === false
            ? StaticData.GoingOut.cardItems.slice(0, 3).map((item, index) => {
                return (
                  <CardCategory
                    key={index}
                    cateTitle="nightlife"
                    title={item.title}
                    slug={item.slug}
                    image={item.img}
                  />
                );
              })
            : StaticData.GoingOut.cardItems.slice(0, 6).map((item, index) => {
                return (
                  <CardCategory
                    key={index}
                    cateTitle="nightlife"
                    title={item.title}
                    slug={item.slug}
                    image={item.img}
                  />
                );
              })}
        </div>

        <button onClick={this.handleButton2} className="moreButton">
          {this.state.isToggle2 === false ? "+more" : "-less"}
        </button>
        <style jsx global>
          {`
            hr {
              border: 1px solid red;
            }

            .moreButton {
              background-color: red;
              color: #fff;
              border: none;
              border-radius: 8px;
              margin-top: 10px;
              width: 100%;
              height: 40px;
              font-size: 18px;
            }
            .moreButton:hover {
              background-color: #fff;
              border: 1px solid red;
              color: red;
            }
            .moreButton:focus {
              outline: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Category;
