import React from 'react';
import {API_ENDPOINT} from '../api/constant'
import Layout from '../components/layout.js'
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// FAKE DATA IMPORT


const Directory = (props) => {

  const { directory } = props;

  return (
      <Layout>
        <h1 style={{ textAlign: 'center', margin: '0px', padding: '20px', textTransform: 'capitalize' }}>{props.url.query.name}</h1>

      <div>

        <ul className="uk-list">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
      </ul>

      </div>
      <style jsx>{`
      img:hover{
        cursor: pointer
      }
    `}</style>
      </Layout>
    )
}


Directory.getInitialProps = async function(context) {

  /**
   * 
   * API CALL ${API_ENDPOINT}directories/:id
   * @param context.query.id
   * 
   */
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
      // mode: 'no-cors',
  })

  const data = await res.json();

  return {
    directory: data
  }
}



export default Directory;