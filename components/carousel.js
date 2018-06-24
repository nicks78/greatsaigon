import React from 'react'



const Carousel = ({images}) => {


    return (
        <div id="Carousel">
        <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="max-height: 300">        
                <ul className="uk-slideshow-items uk-grid" style={{ textAlign: 'center' }}>
                {
                    images.map((x, index) => {
                        return  <li key={index} style={{ paddingLeft: '0px' }}>
                                        <img style={{ height: '100%', width: 'auto' }} src={x} alt="" />
                                </li>
                    })
                }       
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"><i className="fas fa-angle-left fa-2x"></i></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"><i className="fas fa-angle-right fa-2x"></i></a>
        
            </div>

            <style jsx global>{`
                #Carousel {
                    padding-left: 10%;
                    padding-right: 10%;
                }

                @media(max-width: 960px){
                    #Carousel {
                        padding-left: 0%;
                        padding-right: 0%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Carousel;