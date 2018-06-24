//greatsaigon/components/Cards/card-event.js
import Countdown from 'react-countdown-now';
import Link from 'next/link'

const CardEvent = (props) => {

    const {event} = props;
    var image = event.image.medium
    return (
            <div style={{ marginBottom: '30px' }}>
            <div className="CardEvent">
                <div className="Img uk-inline">
                    <span className={`badge ${event.id % 2 == 0 ? 'Expired' : 'Book'} `}>{event.id % 2 == 0 ? 'Expired' : 'Book'}</span>
                        <img src={image} alt="lol"/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p><Countdown date={ Date.now() + 100000000} /></p>
                    </div>
                </div>
                <div className="Text">
                    <Link  href={`/event-profile/${event.id}`}><h3>{ event.name }</h3></Link>
                    <p style={{ margin: '10px 0px 5px 0px' }}><i data-uk-icon="calendar"></i> { event.premiered }</p>
                    <p><i data-uk-icon="location"></i> 135 Nguyen Hue, District 1, Ho Chi Minh City Vietnam</p>
                    
                    <p style={{ position: 'absolute', bottom: '10px', width: '94%', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                    
                        <i className="uk-margin-right" data-uk-icon="clock"></i>
                        {event.schedule.time}&nbsp;{event.schedule.day}
                    </p>
                </div>
            </div>
                <style jsx global>{`
                .CardEvent {
                    background-color: white;
                    box-shadow: 0px 5px 18px black;
                    transition: all 0.3s ease;
                    
                }
                .CardEvent:hover {
                    box-shadow: 5px 0px 18px black;
                }
                h3 {
                    margin-bottom: 5px;
                    color:  #f6a406;
                }
                .Img {
                    position: relative;
                    overflow: hidden;
                    background-color: #eee;
                    height: 200px;
                    width: 100%;
                    text-align: center;
                }

                .Img .badge {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    padding: 0px 10px 0px 10px;
                    border-radius: 5px;
                    background-color: rgba(0,0,0,0.6);
                    color: white;
                }
                .Book {
                    border: 3px solid #76EE00;                    
                }
                .Expired {
                    border: 3px solid red;                    
                }
                h3:hover {
                    cursor: pointer;
                }
                .Text {
                    height: 190px;
                    padding: 10px;
                    position: relative;
                }
                .Text p {
                    margin: 0px;
                }
                .Img {
                    transition: all 0.5s linear;
                }
                .uk-overlay{
                    height: 0px;
                    transition: all 0.2s linear;
                    padding: 0px;
                }
                .Img:hover > .uk-overlay{
                    height: 70px;
                }
                .uk-overlay:hover{
                    height: 70px;
                }

                @keyframes mymove {
                    from {height: 0px;}
                    to {height: 70px;}
                }

            `}</style>
            </div>
    )
}


export default CardEvent;