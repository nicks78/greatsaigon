import React from 'react';
import Layout from '../components/layout.js'
import {API_ENDPOINT} from '../api/constant'
import Router from 'next/router'
import SearchBar from '../components/search-bar'
import fetch from 'isomorphic-unfetch'
import Map from '../components/map'
import CardVenue from '../components/cards/card-venue';
import Filter from '../components/search-bar/filter'

class SearchPage extends React.Component {

  constructor() {

    super()

    this.state = {
      what: '1',
      where: '1',
      directory: '1',
      result: []
    }
  }

  componentWillMount(){
    if(this.props.url)
    this.setState({
      where: this.props.url.query.where,
      what: this.props.url.query.what,
      directory: this.props.url.query.directory
    })
  }

  componentWillReceiveProps(nextProps){
    if(this.props.url)
    this.setState({
      where: nextProps.url.query.where,
      what: nextProps.url.query.what,
      directory: nextProps.url.query.directory
    })
  }

  render(){

    const { where, what, directory, result, drop_what } = this.state;

    return (
        <Layout>
          
          <div className="wrapper uk-width-1-1">
            <div className="wrapper-search-bar">
              <SearchBar what={what} where={where} directory={directory}/> 

              
            </div>
          </div>
          <div className="content">
            <div className="" data-uk-grid>

                <div className="uk-width-expand@m" >
                {
                  this.props.result.slice(0,10).map((x, index) => {
                    return <div key={ index } style={{ marginBottom: '10px' }}>
                      <CardVenue venue={ x } /></div>
                  })
                }
                </div>

                <div id="map" className="uk-width-1-3">
                  <Map  result={ this.props.result } 
                        isSingle={false}/>
                </div>
            </div>
          </div>
            
              
          <style jsx global>{`

          .wrapper {
            background-color: #eee;
            padding: 10px;
          }
          .wrapper-search-bar {
            width: 60%;
            margin: 0 auto;
            padding-top: 10px;
          }
          .content {
            margin: 1em auto;
            max-width: 90% !important;
          }
          #map {
            height: 100vh;
          }
          @media(max-width: 960px) {
            .content {
              margin: 0 auto;
              width: 100%;
            }
            .wrapper-search-bar {
              width: 90%;
              padding-top: 1em;
            }
          }
      `}</style> 
        </Layout>
    )
  }
}

SearchPage.getInitialProps = async function(context) {

    var what = context.query.what
    var where = context.query.where 
    var directory = context.query.directory  

    //venues/search?items=10&page=1&what=${what}&where=${where}
    /**
     * 
     * API CALL 
     * @param context.query.directory
     * 
    */
    const res = await fetch(`${API_ENDPOINT}directories/${what}/venues`, {
    })
  
    const data = await res.json();

    return {
      result: data
    }
  }

export default SearchPage;