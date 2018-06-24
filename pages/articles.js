import Layout from '../components/layout.js'
import fetch from 'isomorphic-unfetch'
import CardArticle from '../components/cards/card-article'


const Articles = (props) => {

  const {articles} = props
  var side = 'left';
  return (
    <Layout  margin="2em 3em 0em 3em">
      <div className="uk-margin-top content">
        <div className="uk-child-width-1-1@s" data-uk-grid>
          {
            articles.map((x, index) => {
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


  Articles.getInitialProps = async function(context) {

  /**
   * 
   * API CALL ${API_ENDPOINT}articles
   * @param context.query.id
   * 
   */
  const res = await fetch(`http://api.tvmaze.com/shows?page=1`, {
  })

  const data = await res.json();

  return {
    articles: data
  }
}
  
  export default Articles