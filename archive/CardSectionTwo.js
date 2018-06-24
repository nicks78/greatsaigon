// import React, { Component } from 'react';
// import CardDataSectionsTwo from '../../static-data/CardDataSectionsTwo';

// const Cards = (props) => {
//     return (
//         <div style={{backgroundImage: `url(${props.img})`}} className="uk-card">
//             <div className="uk-overlay uk-overlay-default uk-position-center">
//                 <h3 key={props.id}>{props.title}</h3>
//             </div>
//         </div>
//     )
// }

// const DisplayCard2 = (props) => {
// return (
//     <div>
//         {
//             CardDataSectionsTwo.map((CardSections2) => {

//                 var CardItems = CardSections2.cardItems.map((cardItem) => {

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
//                         <h2>{CardSections2.headings}</h2>
//                         <hr />
//                         <div className="gridCategory uk-visible@s">
                            
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
// export default DisplayCard2;