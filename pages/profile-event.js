import React from 'react';
import Layout from '../components/layout.js'


const EventProfile = (props) => {
  
    const {event} = props

  return (
    <Layout>
        
        <h1>{event.name}</h1>

    </Layout>
  );
}

EventProfile.getInitialProps = async function(context) {
    /**
     * 
     * API CALL ${API_ENDPOINT}events
     * @param context.query.slug
     * 
     */
    const res = await fetch(`http://api.tvmaze.com/shows/${ context.query.slug }`, {
    })
  
    const data = await res.json();
    return {
      event: data
    }
}


export default EventProfile;