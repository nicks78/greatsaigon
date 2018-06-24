import React from 'react';
import {connect} from 'react-redux'
import {getSingleObject} from '../redux/data/actions'
import Page from '../components/page'
import Layout from '../components/layout.js'
import Loader from '../components/loader'


class EventProfile extends React.Component{
  
    state = {
      event: null
    }
  
    componentDidMount(){
      var api = `events/${this.props.url.query.id}`;
      this.props.getSingleObject(api);    
    }
  
    componentWillReceiveProps(nextProps){
      this.setState({
        event: nextProps.event.payload
      })
    }
  
  render(){

  if(this.props.event.isFetching || this.state.event === null){
    return <Loader />
  }

  const {event} = this.state
  
    return (
      <Layout>
          
          <h1>{event.name}</h1>

      </Layout>
    )
  }
}

// Get all data for child components
const mapStateToProps = (state) => {
  return {
      event: state.dataReducer,
  }
}

// Get all data for child components
const mapDispatchToProps = (dispatch) => {
  return {
  getSingleObject : (api) => dispatch(getSingleObject(api))
  }
}

export default Page(connect(mapStateToProps, mapDispatchToProps)(EventProfile))