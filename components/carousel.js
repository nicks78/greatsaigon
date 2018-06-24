import React from 'react'


const Carousel = ({images}) => {
    return (
        <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true; finite: true">
            <ul className="uk-slider-items uk-grid" data-uk-height-viewport="min-height: 300">
            {
                    images.map((x, index) => {
                        return  <li key={index} className="uk-width-3-4">
                                        <div className="uk-cover-container">
                                            <img src={x} alt="" data-uk-cover/>
                                        </div>
                                </li>
                    })
            }
            </ul>
            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
        </div>
    )
}

export default Carousel;

