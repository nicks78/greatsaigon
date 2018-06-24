import React from 'react'
import {connect} from 'react-redux'
import Layout from '../components/layout.js'
import {getList} from '../redux/data/actions'
import CardArticle from '../components/cards/card-article'
import Page from '../components/page'
import Loader from '../components/loader'

class Articles extends React.Component {

  state = {
    articles: []
  }

  componentDidMount(){
    this.props.getList('articles')
  }

  componentWillReceiveProps(nextProps){
    this.setState({ articles: nextProps.articles.list })
  }

  render(){
  
  if(this.props.articles.isFecthing){
    return <Loader />
  }

    return (
      <Layout margin="2em 3em 0em 3em">
        <div className="uk-margin-top content">
          <div className="uk-child-width-1-1@s" data-uk-grid>
            {
              this.state.articles.map((x, index) => {
                return <CardArticle article={x} key={ index } index={index}/>
              })
            }
          </div>

        
        </div>
        <style jsx global>{`
                .content {
                  margin: 1em auto;
                  max-width: 1080px !important;
                }
          `}</style>
      </Layout>
    )
  }
}

// Get all data for child components
const mapStateToProps = (state) => {
  return {
      articles: state.dataReducer,
  }
}

// Get all data for child components
const mapDispatchToProps = (dispatch) => {
  return {
    getList : (api) => dispatch(getList(api))
  }
}

export default Page(connect(mapStateToProps, mapDispatchToProps)(Articles))