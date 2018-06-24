import React from "react";
import StaticData from "../../static-data/static-data";

class Filter extends React.Component {
  render() {
    return (
      <div
        style={{ height: "auto", paddingLeft: "32px" }}
        className="uk-flex uk-flex-column uk-visible@m"
      >
        <h2 style={{ marginBottom: "-60px" }}>Filters</h2>
        <hr />
        {StaticData.FilterList.map((fil, index) => {
          return (
            <div key={index} id="" className="uk-margin-bottom">
              <img
                style={{ width: "50px", cursor: "pointer" }}
                src={fil.logo}
                alt=""
              />
              <h3>{fil.filterTitle}</h3>
              <div>
                <div onClick={this.props.onClick}>
                  {fil.list.slice(0, 3).map((listings, index) => {
                    return (
                      <label
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr"
                        }}
                        htmlFor={fil.filterTitle}
                        key={index}
                        className="uk-flex uk-flex-column uk-margin-top"
                      >
                        <h5>{listings.name}</h5>
                        <input
                          type="checkbox"
                          name={fil.filterTitle}
                          value={listings.value}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <style jsx global>
          {`
                h3 {
                  display: inline-block;
                  position: relative;
                  top: 10px;
                  left: 15px;
                }
                
                input[type='checkbox'] {
                    position relative;
                    
                    width: 40px;
                    height: 20px;
                    appearance: none;
                    background: #c6c6c6;
                    outline: none;
                    border-radius: 20px;
                    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
                    transition: .5s;
                  }
                  input:checked[type='checkbox'] {
                    background: lightgreen
                  }
                  input[type='checkbox']:before {
                    position: absolute;
                    content: '';
                    width: 20px;
                    height: 20px;
                    border-radius: 20px;
                    border: 1px solid #c6c6c6 ;
                    top: -1px;
                    left: 0;
                    transform: scale(1.1);
                    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
                    background: #FFF;
                    transition: .5s;
                  }
                  input:checked[type='checkbox']:before {
                    left: 20px;
                  }
                `}
        </style>
      </div>
    );
  }
}

export default Filter;
