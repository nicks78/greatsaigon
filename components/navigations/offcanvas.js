import React from 'react'
import Link from 'next/link'


const Offcanvas = (props) => {

    const {menu} = props


    if(menu === undefined || menu.length === 0){
        return <p>Loading...</p>
    }


    return (
        <div id="offcanvas-nav" data-uk-offcanvas="mode: push">
          <div className="uk-offcanvas-bar" style={{ backgroundColor: 'white', paddingTop: '0px' }}>
            <div style={{ margin: '20px 0px 20px 0px' }}>
                <img src="https://greatsaigon.com/Content/images/logo.svg" alt="logo" width="170px"/>
            </div>   
              <ul className="uk-nav uk-nav-default"  data-uk-accordion="multiple: true">

              { 
                menu.map((x, index) => {
                    return <li key={index} className="uk-parent" onClick={ () => { document.getElementById('offcanvas-nav').classList.remove('uk-open') } }>
                              <Link key={index} as={x.slug} href={x.slug}><a style={{ color: '#000',  borderBottom: '1px solid red' }}>{x.name}<i data-uk-icon="check" className="uk-float-right"></i></a></Link>
                              <ul className="uk-nav-sub">
                                  {
                                    x.subdirectory.map((z, index) => {
                                      return <Link key={index} as={z.slug} href={z.slug}><li  className="link"><a className="link" style={{ color: '#808080' }} href="#">{z.name}</a></li></Link>
                                    })
                                  }
                              </ul>
                          </li>
                })
              }
                
              </ul>

          </div>
        </div>
    )
}

export default Offcanvas;

