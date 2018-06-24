import Layout from '../components/layout.js'
import Page from '../components/page'
import {connect} from 'react-redux'


class SignUp extends React.Component {



  handleForm = () => {
    // do someting with form data
    // Call redux action
  }


  render() {

    return (
      <Layout>
        <div>
          <h1>SignUp pages</h1>
          <p>Ici formulaire d'inscription</p>
        </div>
      </Layout>
    )
  }
}

// Get all data for child components
const mapStateToProps = (state) => {
  return {
      
  }
}

// Get all data for child components
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}


export default Page(connect(mapStateToProps, mapDispatchToProps)(SignUp));
