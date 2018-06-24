import Header from '../containers/header'
import Head from 'next/head'
import Footer from './footer/footer'


if (typeof window !== 'undefined') { 
  const UIkit = require('uikit');
  const Icons = require( 'uikit/dist/js/uikit-icons')
  UIkit.use(Icons);
}

const Layout = (props) => {

  const { margin } = props
  
  return (
    <div>
        <Head>
          <title>Greatsaigon | Food, Events, Shopping and more in saigon (Ho Chi Minh City) Vietnam</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="UTF-8" />
          <meta name="description" content="Food, Events, Shopping and more in saigon (Ho Chi Minh City) Vietnam" />
          <meta name="keywords" content="Saigon, restaurants, events, bars" />
          <meta name="author" content="John Doe" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/css/uikit.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossOrigin="anonymous" />
          <link rel="icon" href="https://greatsaigon.com/Content/images/favicon.ico" type="image/x-icon" />

        </Head>
        <Header menu={ props.menu }/>
        <div style={{ margin: margin }}>
            {props.children}
            <style jsx global>{`
              body { 
                margin: 0px;
              }
              p{
                font-size: 14px;
              }
            `}</style>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js"></script>
      <Footer />
  </div>
  )
}


export default Layout
