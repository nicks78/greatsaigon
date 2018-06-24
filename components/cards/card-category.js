import React, { Component } from 'react';
import Link from 'next/link';

const CardCategory = (props) => {
        
        const {title, image} = props

        return (
            <Link href={`/search-page/food-and-drink/ho-chi-minhe/${title.toLowerCase()}`}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" style={{backgroundImage: `url(${image})`}}>
                <div className='uk-inlilne'>
                <img src="" alt="" />
                    <div className='uk-overlay uk-overlay-default uk-position-center'>
                        <p className='title'>{title}</p>
                    </div>
                <style jsx global>{`
                    .uk-card {
                        background-size: cover;
                        background-position: center;
                        height: 300px;
                        margin-bottom: 10px;
                    }
                    .uk-card:hover {
                        cursor: pointer;
                    }
                    .title {
                        font-size: 18px;
                        font-weight: normal;
                        color: #fff;
                        text-align: center;
                    }
                    .uk-overlay {
                        background: rgba(0, 0, 0, .5);
                        border-radius: 20px;
                        width: 88%;
                        padding: 5px 2%;
                    }

                `}</style>
                </div>
            </div>

            </Link>
        )
}

export default CardCategory;

