//greatsaigon/pages/events.js

import Layout from '../components/layout.js'
import CardEvent from '../components/cards/card-event';
import fetch from 'isomorphic-unfetch'


const Events = (props) => {

  const { events } = props
  
  return (
    <Layout margin="2em 1em 0em 1em">
      <div className="content">
        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          {
            events.map((x, index) => {
              return <CardEvent key={index} event={ x }/>
            })
          }
        </div>


      </div>
      <style jsx global>{`
              .content {
                margin: 0 auto;
                max-width: 1080px !important;
              }
        `}</style>
    </Layout>
  )
}
  

Events.getInitialProps = async function(context) {
    /**
     * 
     * API CALL ${API_ENDPOINT}events
     * @param context.query.id
     * 
     */
    const res = await fetch(`http://api.tvmaze.com/shows?page=1`, {
    })
  
    const data = await res.json();
    return {
      events: data
    }
}


export default Events