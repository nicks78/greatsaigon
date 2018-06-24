import React from 'react';
import Layout from '../components/layout.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Page from '../components/page'
import { isMobile } from 'react-device-detect'
import Button from '../components/buttons/button'
import locales from '../locales/en.json'
import Link from 'next/link'


class SignIn extends React.Component {

    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        var name = e.target.name
        var value = e.target.value

        this.setState({
            [name] : value
        })
    }

    handleSubmit = () => {
        // Do something after submition
        // Call redux action
        

    }



    render(){
    const { email, password} = this.state
        return (
            <Layout>
                <div className="loginPage" style={{ marginBottom: '2em', margin: '0 auto', marginTop: '7%', paddingBottom: '3em', boxShadow: '0px 5px 18px gray', backgroundColor: '#f8f8f8' }}>
                    <div className="HeaderH1">
                        <h1>{ locales.h1_page_login }</h1>
                    </div>
                    
                    <div style={{ padding: '3em' }}>
                        <div className="uk-margin">
                            <input type="text" className="uk-input" name="email" placeholder={locales.email} onChange={ this.handleChange }  />
                        </div>
                        <div className="uk-margin">
                            <input type="text" className="uk-input" name="username" placeholder={locales.password} onChange={ this.handleChange }  />
                        </div>
                        <div className="uk-margin">
                            <Button onSubmit={ this.handleSubmit } textButtom="Login" classeButton="default"/>
                        </div>
                        <br /><br />
                        <div style={{ marginTop: '20px' }} className="uk-text-center">
                            <Link href="/">{ locales.forget_password }</Link>
                        </div>
                        <div className="uk-clearfix"></div>
                        <hr />
                            <Button onSubmit={ this.handleSubmit } textButtom="Login with Facebook" classeButton="facebook" />

                    </div>
                </div>
                <style jsx global>{`
                .HeaderH1{
                    background: linear-gradient(to right, #ed3c48 0%, #fbb434 100%);
                    padding: 0.5em; 
                }
                .HeaderH1 h1{
                    color: white;
                    text-align: center
                }
                .loginPage {
                    width: 50%;
                }
                @media(max-width: 960px){
                    .loginPage {
                        width: 95%;
                    }
                }
            `}</style> 
            </Layout>
        )
    }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Get all data for child components
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
    }
  }
  
// Get all data for child components
const mapDispatchToProps = (dispatch) => {
    return {
        getAuth : () => dispatch(getAuth())
    }
}

export default Page(connect(mapStateToProps, mapDispatchToProps)(SignIn));