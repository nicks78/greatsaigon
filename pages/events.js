//greatsaigon/pages/events.js
import Page from '../components/page'
import {connect} from 'react-redux'
import {getList} from '../redux/data/actions'
import Layout from '../components/layout.js'
import CardEvent from '../components/cards/card-event';
import Loader from '../components/loader'


class Events extends React.Component {

    state = {
      events: []
    }


    componentDidMount(){
      this.props.getList('events')
    }
  
    componentWillReceiveProps(nextProps){
      this.setState({ events: nextProps.events.list })
    }
  
  
  render(){

  if(this.props.events.isFetching){
    return <Loader />
  }
  
  const { events } = this.state
      
      return (
        <Layout  margin="2em 3em 0em 3em">
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
}
  




const mapStateToProps = (state) => {
  return {
    events: state.dataReducer,
  }
}

// Get all data for child components
const mapDispatchToProps = (dispatch) => {
  return {
  getList : (api) => dispatch(getList(api))
  }
}

export default Page(connect(mapStateToProps, mapDispatchToProps)(Events))