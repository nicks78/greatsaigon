import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store';


const Page = (Page) => {
  
  return (
    class PageWrapper extends React.Component{
      render(){
        return (
          <Provider store={store}>
              <Page {...this.props}/>
          </Provider>
        )
      }
    }
  )
}


export default Page