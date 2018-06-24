import React, { Component } from 'react';
import Page from '../components/page'
import Layout from '../components/layout';

const Privacy = () => {

    
        return (

            <Layout>
                <div className="hero_privacy">
                    <h1>Privacy policy</h1>
                </div>
                <div className="container_privacy uk-container uk-container-small">
                    <div>
                        <h3>1. Information We Collect and How We Use It</h3>
                        <br />
                        <p className="desc_privacy">
                        <strong>Login Information:</strong> If you choose to sign up for a Great Saigon account by entering your information in the Signup page, your email address will be automatically collected and saved on our server. If you choose to sign up by Facebook account, we may collect the email you have used to sign up for your Facebook and synchronize your profile picture from your Facebook page. This information will help us recognize your identity, protect your security, and send you related notification and newsletter. 
                        <br />
                        <br />
                        <strong>User profile information:</strong> When you create your personal profile, we may store and use your full name, email address, gender, date of birth, nationality and other information you may provide. Your first name, nationality, age and any photo you submit in creating your profile, will be displayed publicly when you submit a restaurant review, post and comment in the forum, and when other users who’s not in your friend list view your profile. Other information like your experience as an expat in Saigon and your interests will be collected and stored in our database for Great Saigon’s further research and service development, search results optimization and suggesting listings that are relevant to your interest. 
                        <br />
                        <br />
                        <strong>Public content:</strong> The information that you contribute to our platform is intended for public consumption, including your reviews, photos, comments, events, friends and account profile. We may display this information on Great Saigon only. 
                        <br />
                        <br />
                        <strong>Communications:</strong> Once you have successfully register for an account on Great Saigon, you will receive messages from our team, other Great Saigon users, and probably business owners. You can change your messaging preference on account settings. However, Great Saigon retains the rights to send you general administrative, transactional, or legal message to inform you of our policy and recent update. If you are the contact person of a venue/business listed on Great Saigon, we may contact you by phone or email to verify the listing information, using the information you provide us. We may also store information that you provide us through phone calls, emails, message function on our platform or in person.
                        <br />
                        <br />
                        Activity: We may keep records of your activities, such as searching, the pages you view, the date and time of your visit, and session you make through our platform. We may also collect geolocation data that your device provides us, such as your type of device, the OS you use, IP address, location, etc. for your use of location-based service. We will keep this information solely for the use of research and our product development.
                    </p>
                        <br />
                        <br />
                    </div>
                    <div>
                        <h3>2. Cookies</h3>
                        <br />
                        <p className="desc_privacy">
                        Cookies are small text files which are transferred from our websites, applications or services and stored on your device. We use cookies to help us provide you with a personalized service, and also to help make our websites, applications and services better for you. Once you click “Remember me” when you log in to your account, you have accepted our use of cookie. 
                        <br />
                        <br />
                        We use persistent cookies which enable our websites, applications or services to “remember” who you are and to remember your preferences within our websites, applications or services and which will stay on your computer or device after you close your browser or leave your session in the application or service.
                    </p>
                        <br />
                        <br />
                    </div>
                    <div>
                        <h3>3. Third Parties</h3>
                        <br/>
                        <p className="desc_privacy">
                        Third parties that may receive information about you are: 
                        <br />
                        <br />
                        <strong>Business with listings on GreatSaigon:</strong> Restaurants and event organizers will receive information concerning your reservation or booking for further processing and management. We may share your contact information for these users so that they can fulfill and complete your requests. 
                        <br />
                        <br />
                        <strong>Our potential partners/clients:</strong> In order to expand our user community, we may include aggregate information about our users in our partnership proposal, so that our potential partners/clients may have a view of our business.
                        Information that we may share to third parties are: 
                        <br />
                        <br />
                        <strong>Aggregate information:</strong> We may share user aggregated information to third parties, such as business users and content distributors. For example, we may disclose the number of users that have accessed your listing page or the number of users have ever used your service. 
                        <br/>
                        <br />
                        <strong>Facebook accounts:</strong> If you sign up for Great Saigon using Facebook, we may receive information about you (profile picture, name, email address, age, location, etc.) in agreement with Facebook. 
                    </p>
                        <br />
                        <br />
                    </div>
                    <div>
                        <h3>4. Data Retention and Account Termination</h3>
                        <br/>
                        <p className="desc_privacy">
                        We may review the content you contribute for public use and remove it if there is evidence of wrongdoing, such as reviews paid/commissioned with restaurants, bad language or insulting. If we find out your business’ attempts to spam or manipulate the reviews and search results of your business as well as other business, your account will be immediately banned and all of your listings and information will be removed from the website. We may still keep your information in the server for record and to prevent such malpractice in the future.
                    </p>
                        <br/>
                        <br/>
                    </div>
                </div>
                <style jsx global>
                {
                    `
                    .hero_privacy {
                        background: -webkit-linear-gradient(left, #ed3c48 0%, #fbb434 100%);
                        background: linear-gradient(to right, #ed3c48 0%, #fbb434 100%);
                        height: 300px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .container_privacy {
                        position: relative;
                        bottom: 50px;
                        box-shadow: 0px 0px 44.16px 1.84px rgba(0, 0, 0, 0.14);
                        background: white;
                        padding: 50px 50px;
                    }
                    .container_privacy::before {
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
                    h1 {
                        color: #fff;
                        font-weight: 700;
                    }
                    h3 {
                        margin-bottom: 0.5rem;
                        font-weight: 500;
                        line-height: 1.1;
                        font-size: 1.75rem;
                    }
                    .desc_privacy {
                        font-size: 0.9rem;
                        color: black;
                    }
                    `
                }
                </style>
            </Layout>
        )
    
}

export default Page(Privacy);