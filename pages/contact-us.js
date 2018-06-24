import React, { Component } from 'react';
import Page from '../components/page'
import Layout from '../components/layout';

const ContactUs = () => {

    
        return (

            <div>
                <Layout>
                    
                    
                    <div className="hero_contact_us">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="uk-container uk-container-small"></div>
                    <div className="container_contact_us uk-container uk-container-small">
                        <h3>Thank you for visiting GreatSaigon.com</h3>
                        <div className="contact_email">
                            <div>
                                <h5>
                                    For General information
                                </h5>
                                    <a href="mailto:info@greatsaigon.com" target="_top">info@greatsaigon.com</a>
                            </div>
                            <div>
                                <h5>
                                    For restaurant listing inquiries
                                </h5>
                                    <a href="mailto:restaurant@greatsaigon.com">restaurant@greatsaigon.com</a>
                            </div>
                            <div>
                                <h5>
                                    For nightlife and event listing inquiries
                                </h5>
                                    <a href="mailto:events@greatsaigon.com">events@greatsaigon.com</a>
                            </div>
                        </div>
                        <hr/>
                        <form className="uk-form-stacked" action="">

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Name</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-stacked-text" type="text" required/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-stacked-text" type="email" required/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Subject</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-stacked-text" type="text" required/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">Description</label>
                            <textarea className="uk-textarea" rows="5" required></textarea>
                        </div>

                        <button className="btn-submit" type="submit">Send</button>
                        </form>
                    </div>
                </Layout>
                <style jsx global>
                {
                    `
                    .hero_contact_us {
                        background: 
                            linear-gradient(
                                rgba(237,60,72, 0.5),
                                rgba(251,180,52, 0.5)
                            ), url(https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c63357d1e6bdc82b5f166c5fb8314bb5&auto=format&fit=crop&w=2166&q=80);
                        
                        background-size: cover;
                        background-position: center;
                        background-attachement: fixed;
                        width: 100%;
                        height: 300px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .container_contact_us::before {
                        display: block;
                        content: " ";
                        background: #ed3c48;
                        background: -moz-linear-gradient(left, #ed3c48 0%, #fbb434 100%);
                        background: -webkit-linear-gradient(left, #ed3c48 0%, #fbb434 100%);
                        background: linear-gradient(to right, #ed3c48 0%, #fbb434 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ed3c48', endColorstr='#fbb434',GradientType=1 );
                        height: 10px;
                        width: 100%;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                    }
                    .container_contact_us {
                        position: relative;
                        bottom: 50px;
                        box-shadow: 0px 0px 44.16px 1.84px rgba(0, 0, 0, 0.14);
                        background: white;
                        padding: 50px 50px;
                    }
                    .contact_email {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        text-align: center;    
                    }
                    h1 {
                        color: #fff;
                        font-weight: 700;
                    }
                    h3 {
                        text-align: center;
                        margin-bottom: 0.5rem;
                        font-weight: 500;
                        line-height: 1.1;
                        font-size: 1.75rem;
                    }
                    .btn-submit {
                        background: #f50633;
                        border: 1px solid #f50633;
                        color: white;
                        border-radius: 30px;
                        min-width: 110px;
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                    }
                    .btn-submit:hover {
                        background-color: darkred;
                        border: darkred;
                        cursor: pointer;
                    }
                    h5 {
                        margin-bottom: 0px;
                        margin-top: 4em;
                        font-size: 12px;
                    }
                    @media screen and (max-width: 996px) {
                        .contact_email {
                            grid-template-columns: 1fr;
                        }
                    }
                    `
                }
                </style>
            </div>
        )
    
}

export default Page(ContactUs);