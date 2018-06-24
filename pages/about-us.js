import React, { Component } from 'react';
import Layout from '../components/layout';
import Page from '../components/page'
const AboutUs = () => {

    
        return (

            <div>
                <Layout>
                    <div className="hero_about_us">
                        <h1>About Us</h1>
                    </div>
                    <div className="uk-container uk-container-small">
                        <div className="section_about_us">
                            <h2>WHO WE ARE</h2>
                            <p className="desc">
                            Based in the top robust and colorful city of Vietnam, we are a young, passionate team of expats and locals who are thriving for what’s up in the city as well as keen on only genuine and selective content.
                            </p>
                            <p className="desc">
                            We understand the needs of expats in town, as well as those who want to escape the label of tourist, for trustworthy, edging information and current activities. Great Saigon directory is thus, conceived to keep you upbeat and live in the moment with a full range of restaurant & event in Ho Chi Minh City (preferably known as Saigon).
                            </p>
                        </div>
                        <hr />
                        <div className="section_about_us">
                            <h2>WHAT WE DO</h2>
                            <p className="desc"> 
                            Great Saigon provide sleek and clean listings that help you navigate through the tangling roads and alleys of the city, find the restaurant right to your taste, or occupy your time here with the most current event.
                            </p>
                        </div>
                        <hr />
                        <div className="section_about_us">
                            <h2>OUR MISSION</h2>
                            <p className="desc">
                            True to the name, we aim at becoming the top-notch editorial team in Saigon, your trusted city experts while making your living in Saigon enjoyable with a lot more excitement.
                            </p>
                        </div>
                    </div>
                </Layout>
                <style jsx global>
                    {
                        `
                        .hero_about_us {
                            background-image: url(https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f480fbe732ffc85eaed64b7440b901f&auto=format&fit=crop&w=3366&q=80);
                            background-size: cover;
                            background-position: center;
                            height: 600px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .section_about_us {
                            margin-top: 3em;
                            margin-bottom: 4em;
                        }
                        h1 {
                            font-weight: 700;
                            color: #fff;
                        }
                        h2 {
                            font-weight: 700;
                            margin-bottom: 1em;
                            
                        }
                        .desc {
                            font-size: 17px;
                            color: #000;
                        }
                        `
                    }
                </style>
            </div>
        )
    
}

export default Page(AboutUs);