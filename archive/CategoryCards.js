import React, { Component } from 'react';
import CardSectionOne from './CardSectionOne';
import CardSectionTwo from './CardSectionTwo';
import CardSectionThree from '../cards/ardSectionThree';
import MoreButton from '../buttons/MoreButton';
import HomePageCategoryContainerSection from '../containers/HomePageCategoryContainerSection';

class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle1: false,
            isToggle2: false,
            isToggle3: false,
        }
        this.handleCardButton1 = this.handleCardButton1.bind(this);
        this.handleCardButton2 = this.handleCardButton2.bind(this);
        this.handleCardButton3 = this.handleCardButton3.bind(this);
       
    }

    handleCardButton1() {
        this.setState(prevState => ({
            isToggle1: !prevState.isToggle1
        }));
        
    }

    handleCardButton2() {
        this.setState(prevState => ({
            isToggle2: !prevState.isToggle2
        }));
    }

    handleCardButton3() {
        this.setState(prevState => ({
            isToggle3: !prevState.isToggle3
        }));
    }

    render() {
        
        return (
            <div>

                <div>
                    <CardSectionOne isToggle={this.state.isToggle1}/>
                    <MoreButton isToggle={this.handleCardButton1}/>
                </div>

                <div>
                    <CardSectionTwo isToggle={this.state.isToggle2}/>
                    <MoreButton isToggle={this.handleCardButton2}/>
                </div>

                <div>
                    <CardSectionThree isToggle={this.state.isToggle3}/>
                    <MoreButton isToggle={this.handleCardButton3}/>
                </div>

                    <style jsx global>{`
                        .uk-card {
                           
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center;
                            border: 1px solid #ddd;
                        }
    
                        .uk-card:hover {
                            border: 2px solid #ff0000;
                            box-shadow: 5px 10px 18px #ddd;
                            cursor: pointer;
                        }
    
                        .uk-overlay  {
                            background: rgba(0, 0, 0, .5);
                            width: 88%;
                            padding: 5px 2%;
                            border-radius: 20px;
                            text-align: center;
                        }
    
                        h3 {
                            color: white;
                            font-size: 18px;
                        }

                          .gridCategoryMobile {
                            display: grid;
                            grid-template-columns: 1fr;
                            grid-gap: 1em;
                            grid-auto-rows: minmax(220px, auto);
                          }
          
                          hr {
                            border: 1px solid #ff0000;
                          }

                          .gridCategory {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-gap: 1em;
                            grid-auto-rows: minmax(220px, auto);
                          }

                    `}</style>
            </div>
        );
    }
}

export default CategoryCard;

