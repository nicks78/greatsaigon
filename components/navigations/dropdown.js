import React from 'react'
import Link from 'next/link'

const Dropdown = (props) => {

    const {menu} = props;

    if(menu === undefined ){
        return <p>Loading...</p>
    }

    const loopMenu = (menu, x, y) => {
           return menu.slice(x,y).map((x, index) => {
                return <div key={index} style={{ marginBottom: '20px' }}>
                    <Link as={`directory/${x.slug}`} href={`directory?name=${x.slug}`}><p className="directory">{x.name}<i className="uk-float-right" data-uk-icon="check"></i></p></Link>
                    
                    {
                        x.subdirectory.map((z, index) => {
                        return <Link key={index} as={`search-page/${x.slug}/district-1/${z.slug}`} href={`search-page/?directory=${x.slug}/?where=district-1/?what=${z.slug}`}>
                                <p className="uk-button-text" style={{ color: 'black', margin: '0px 0px 0px 20px' }}>{z.name}<br /></p></Link>
                        })
                    }
                    </div>
                })
    }
    

    return (
        <div className="uk-animation-slide-top-small" style={{ backgroundColor: '#F8F8F8', height: 'auto', width: '80%', padding: '2em', margin: '0 auto', boxShadow: '5px 5px 18px 0px #888888', marginBottom: '10px'}}>
                <div className="uk-child-width-1-4" data-uk-grid>

                        <div>
                            { loopMenu(menu, 0, 3) }
                        </div>

                        <div style={{ paddingLeft: '30px' }}>
                            
                            { loopMenu(menu, 3, 7) }
                            
                        </div>
                        <div style={{ paddingLeft: '30px' }}>
                            
                            { loopMenu(menu, 7, 8) }
                            
                        </div>

                        <div style={{ paddingLeft: '30px' }}>
                            
                            { loopMenu(menu, 8) }
                            
                        </div>
                </div>
                <style jsx global>{`
                    .directory {
                        border-bottom: 1px solid red;
                    }
                    p:hover{
                        cursor: pointer;
                    }
                    .directory{
                        transition: 0.2s linear
                    }
                    .directory:hover{
                        color: red
                    }
                    .uk-button-text::before {
                        border-bottom: 1px solid red;
                    }
            `}</style>           
        </div>
    )
}

export default Dropdown;

