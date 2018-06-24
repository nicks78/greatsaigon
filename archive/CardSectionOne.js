// import React, { Component } from 'react';
// import CardDataSectionsOne from '../../static-data/CardDataSectionsOne';

// const Cards = (props) => {
//     return (
//         <div style={{backgroundImage: `url(${props.img})`}} className="uk-card">
//             <div className="uk-overlay uk-overlay-default uk-position-center">
//                 <h3 key={props.id}>{props.title}</h3>
//             </div>
//         </div>
//     )
// }

// const DisplayCard = (props) => {
// return (
//     <div>
//         {
//             CardDataSectionsOne.map((CardSections1) => {

//                 var CardItems = CardSections1.cardItems.map((cardItem) => {

//                     return (
//                         <Cards 
//                             img={cardItem.img} 
//                             id={cardItem.id}
//                             title={cardItem.title}
//                             />
//                     )
//                 })
//                 return (
//                     <div>
//                         <h2>{CardSections1.headings}</h2>
//                         <hr />
//                         <div className="gridCategory uk-visible@s">
//                             {/* {CardItems} */}
//                             {props.isToggle ? CardItems.slice(0, 6) : CardItems.slice(0, 3)}
//                         </div>
//                         <div className="gridCategoryMobile uk-hidden@s">
//                             {props.isToggle ? CardItems.slice(0, 6) : CardItems.slice(0, 3)}
//                         </div>
                        
//                     </div>
//                 )
//             })
//         }
//         </div>
//     )
// }
// export default DisplayCard;