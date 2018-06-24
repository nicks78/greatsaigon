import React from 'react'
import {connect} from 'react-redux'
import {getSingleObject} from '../redux/data/actions'
import Page from '../components/page'
import Layout from '../components/layout'
import Loader from '../components/loader'


class ProfileArticle extends React.Component{
  
  state = {
    article: null
  }

  componentDidMount(){
    var api = `articles/${this.props.url.query.id}`;
    this.props.getSingleObject(api);    
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      article: nextProps.article.payload
    })
  }

  render(){

    if(this.props.article.isFetching || this.state.article === null){
      return <Loader />
    }
    const {article} = this.state

      return (
        <Layout>
            
            {/* <h1>{article[0].items[0].venue[0].name}</h1> */}

        <div className="uk-container">
            <article className="uk-article">

              <h1 className="uk-article-title"><a className="uk-link-reset" href="">{article[0].title}</a></h1>

              <p className="uk-article-meta">Written by <a href="#">{article[0].published_by}</a> on {article[0].published_date}. Posted in <a href="#">Articles</a></p>

              <p className="uk-text-lead">{article[0].description}</p>

              <p>{article[0].items[0].venue[0].name}</p>

              <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                  <div>
                      <a className="uk-button uk-button-text" href="#">Read more</a>
                  </div>
                  <div>
                      <a className="uk-button uk-button-text" href="#">5 Comments</a>
                  </div>
              </div>

              </article>
          </div>

        </Layout>
      )
    }
}

// Get all data for child components
const mapStateToProps = (state) => {
  return {
      article: state.dataReducer,
  }
}

// Get all data for child components
const mapDispatchToProps = (dispatch) => {
  return {
  getSingleObject : (api) => dispatch(getSingleObject(api))
  }
}

export default Page(connect(mapStateToProps, mapDispatchToProps)(ProfileArticle))