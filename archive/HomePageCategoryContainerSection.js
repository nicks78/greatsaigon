import React from 'react';
// import CardsItemsData from '../../static-data/cardsItemsData';

const HomePageCategoryContainerSection = (props) => {
    return (
        <div className="gridCategory uk-visible@s" >
            {props.cardItems}
          <style jsx global>
            {`
                .gridCategory {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 1em;
                    grid-auto-rows: minmax(220px, auto);
                  }
            `}
          </style>
         
        </div>
    )
}

export default HomePageCategoryContainerSection;