import React from 'react';
import ReactDOM from 'react-dom';


export default class MoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false
        }
        this.handlerButton = this.handlerButton.bind(this);
    }

    handlerButton() {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    render() {
        return (
            <div onClick={this.handlerButton}>
                <button onClick={this.props.isToggle}>
                {this.state.isToggle ? '-less' : '+more'}
                <style jsx global>{`
                    button {
                        width: 100%;
                        height: 20px;
                        padding: 16px;
                        margin-top: 16px;
                        border: none;
                        color: #FFF;
                        background-color: #f50633;
                        border-radius: 8px;
                        font-size: 16px;
                      }

                      button:focus {
                          outline: none;
                      }
      
                      button:hover {
                        box-shadow: 5px 10px 18px #ddd;
                        cursor: pointer;
                      }
                `}</style>
            </button>
            </div>
        )
    }
    
}