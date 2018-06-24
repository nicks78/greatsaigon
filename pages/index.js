import Layout from '../components/layout.js'
import Link from 'next/link'
import Carousel from '../components/carousel'
import locales from '../locales/en.json'
import SearchBar from '../components/search-bar'
import { API_ENDPOINT } from '../api/constant'
import Category from '../containers/category'
import fetch from 'isomorphic-unfetch'

const  Index = (props) => {

  const { menu} = props

  // Tmp data
  const carousel = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLb5mOUtzV0ObqBVuAURSvPAsC27148aFdKGc6e6Z_Z78vmMWf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTRL-yt5n7bCKFEf7lTow_hWfRrVpkuQ6X4_iAHMQOqZBvcBVDA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOe0OyHqZe-Qf9mw2K-aiImVzPQciByL7pi2KfB66k3RnIY1ttQ'
  ]

  return (
    <div>
        <Layout>
          <div className="header" style={{ backgroundImage: 'url(https://c1.staticflickr.com/9/8148/7644863446_5bace673c9_b.jpg)', width: '100%', margin: ' 0 auto' }}>

            <div className="wrapper-search-bar">
                <SearchBar />
            </div>
              
          </div>

          <div className="content">
            <h2 style={{ textAlign: 'center' }}>{ locales.title_event }</h2>
          </div>
        <div style={{ maxHeight: '350px', backgroundColor: '#f35050', }}>
            <Carousel images={ carousel.slice(0,4) }/>  
        </div>


          <div className="content" >
            <Category />
          </div> 

        </Layout>
    <style jsx global>{`
          .wrapper-search-bar {
            width: 60%;
            margin: 0 auto;
            padding-top: 110px;
          }
          .header {
            height: 350px;
          }

          .content {
            margin: 1em auto;
            max-width: 1080px !important;
          }
          @media(max-width: 960px) {
            .content {
              margin: 0 auto;
              width: 100%;
            }
            .header {
              height: auto;
              padding-bottom: 1em;
            }
            .wrapper-search-bar {
              width: 90%;
              padding-top: 1em;
            }
          }
      `}</style> 
  </div>
  )
}

Index.getInitialProps = async function(context) {
  /**
   * 
   * API CALL ${API_ENDPOINT}directories/:id
   * @param context.query.id
   * 
   */
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
  })

  const data = await res.json();

  return {
    carousel: data
  }
}


export default Index;
