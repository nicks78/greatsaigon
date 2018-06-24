import React from 'react'
import {API_ENDPOINT} from '../../api/constant'
import StaticData from '../../static-data/static-data'
import locales from '../../locales/en.json'
import renderHTML from 'react-render-html';
import Router from 'next/router'
import Link from 'next/link'
import SearchPage from '../../pages/search-page'
// Component
import TagHolder from './tag-holder'
import Input from '../forms/input'

class SearchBar extends React.Component {

  constructor() {

    super()

    this.state = {
      what: '1',
      where: '1',
      directory: '1',
      drop_where: StaticData.District,
      drop_what: [],
      drop_directory: [],
      result: [],
      directories: []
    }
  }

  componentWillMount(){
    this.setState({
      where: this.props.where || '1',
      what: this.props.what || '1',
      directory: this.props.directory || '1'
    })
  }


  componentDidMount(){
    
    // NOT YET WORKING / TO BE FIXED 
    fetch(`${API_ENDPOINT}directories`, {
      mode: 'cors'
    })
    .then( response => {
      return response.json()
    })
    .then(data => {
      var drop_directory = data.filter( (res) => { return res.slug })
      this.setState({ 
        directories: data,
        drop_directory: drop_directory,
      }, () => {
        this.setState({ drop_what: this.getWhatList(this.state.directory) })
      })
    })
  }

    
    getWhatList = (category) => {

      var dir = this.state.directories;
      var array = [];

      for(var i = 0 ; i < dir.length; i++){
        if(category === dir[i].slug){
            return array = dir[i].subdirectory           
        }
      }
      return array;
    }


    handleSelect = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        var dir = name === 'directory' ? true : false

        // Call function to update dropdown-select-what
        if( dir ){
          var what = this.getWhatList(value)
        }

        this.setState({ [name]: value, drop_what: dir ? what : this.state.drop_what })
    }  

    onSubmitSearch = (e) => {
      var what = this.state.what !== '1' ? this.state.what : 'restaurant'
      var where = this.state.where !== '1' ? this.state.where : 'district-1'
      var directory = this.state.directory !== '1' ? this.state.directory : 'food-and-dring'
      const href = `/search-page/?directory=${directory}/?where=${where}/?what=${what}`
      const aS = `/search-page/${directory}/${where}/${what}`
      Router.replace(href, aS);
      
    }

    render() {

      const { where, what, directory, drop_where, drop_what, drop_directory, result } = this.state;

      return (
        <div style={{ width: '100%' }}>

            <div>

              <div className="wrapper uk-child-width-1-1@s uk-child-width-1-5@m" data-uk-grid>
              <div className=" uk-width-1-1@s uk-width-1-5@m">
              <div className="uk-inline" style={{ width: '100%' }}>
                  <select name="directory" className="uk-select select-directory" onChange={ this.handleSelect } value={ directory }>
                      <option value="1" disabled>Category ?</option>
                      {
                        drop_directory.map((x, index) => {
                            return <option key={index} value={x.slug} style={{ textTransform: 'capitalize' }}>{x.name}</option>
                        })
                      }      
                  </select>
              </div>
              </div>
              <div className="uk-inline uk-width-1-1@s uk-width-1-5@m">
                  <select name="where" className="uk-select" onChange={ this.handleSelect } value={where}>
                    <option value="1" disabled>Where ?</option>
                    {
                      drop_where.map((x, index) => {
                          return <option key={index} value={x.toLowerCase()} style={{ textTransform: 'capitalize' }}>{x}</option>
                      })
                    }
                  </select>
              </div>
              
                <div className="uk-inline uk-width-1-1@s uk-width-2-5@m">
                  <select name="what" className="uk-select" onChange={ this.handleSelect } value={what}>
                    <option value="1" disabled>What ?</option>
                    {
                      drop_what.map((x, index) => {
                          return <option key={index} value={x.slug} style={{ textTransform: 'capitalize' }}>{x.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className="search uk-width-1-1@s uk-width-1-5@m">
                  <div className="uk-inline">
                      <i className="uk-form-icon"  className="uk-form-icon uk-form-icon-flip fas fa-search fa-lg" style={{ color: 'white' }}></i>
                      <input type="submit" value={ locales.search } className="submit uk-input" onClick={ this.onSubmitSearch } />
                  </div>
                  </div>
                </div>
            </div>
            

          <style jsx global>{`
              body { 
                margin: 0px;
              }
              .uk-input{
                height: 50px;
              }
              .uk-select {
                height: 50px !important;
              }

              .fas {
                display: inline-flex;
              }

              .search input {
                background-color: red;
                color: white;
                border-color: red;
              }
              .search input:hover, .search input:focus {
                background-color: #f6a406;
                border-color: #f6a406;
                cursor: pointer;
              }

              @media(max-width: 960px){
                .wrapper .uk-inline{
                  margin-top: 5px;
                }
                .submit {
                  border-bottom-right-radius: 0px;
                  border-top-right-radius: 0px;                
                }
                .select-directory {
                  border-bottom-left-radius: 0px;
                  border-top-left-radius: 0px;                
                }
                .uk-grid-margin {
                  margin-top: 0px;
                }
                .search .uk-inline{
                  width: 100%;
                }
              }

              @media(min-width: 960px) {
                .wrapper .uk-inline:nth-child(2),
                .wrapper .uk-inline:nth-child(3) {
                    padding-left: 1px;
                }
                .select-directory {
                  border-bottom-left-radius: 24px;
                  border-top-left-radius: 24px;                
                }
                .submit {
                  border-bottom-right-radius: 24px;
                  border-top-right-radius: 24px;              
                }
                .search {
                  padding-left: 0px;
                }
              }


            `}</style>
        </div>
      )
    }
  }

export default SearchBar;


