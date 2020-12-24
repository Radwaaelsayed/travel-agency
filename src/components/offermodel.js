import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

const OfferModel = ({offers,loading}) =>{
    let images  = [".././images/4.jpg" ,".././images/5.jpg",".././images/6.jpg",".././images/7.jpg",".././images/8.jpg",".././images/9.jpg",".././images/10.jpg",".././images/11.jpg",".././images/12.jpg",".././images/13.jpg" ]
    let randomNum = Math.floor(Math.random() * images.length);  

    if(loading)
    {
        return <h1>Loading...</h1>
    }
    return(
       <React.Fragment>
        {offers.map((offer) => {  
         return  <div className="col-6 col-sm-6 col-md-6 col-lg-3 mt-5 mb-5 p-2" key={offer.id}>
                   <div className="card border-0" style={{width:"255px" , height:"291px"}}>
                    <img src={images[Math.floor(Math.random() * images.length +1)]} className="card-img-top offer-img p-1" alt="..."/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                        <h3 className="offer-title">
                          <Link to={{
                              pathname : `/offerdetails`,
                              state : offer
                              }}   className="offer-link">{offer.offer_title}</Link>
                        </h3>
                        <div className="offer-price">
                            <span>{offer.tripCost}</span>
                            <span>LE</span>     
                        </div>
                        </div>
                        <div className="offer-city">
                            <span><i class="fa fa-map-marker" ></i></span>
                            <span className="ml-1">{offer.offer_city}</span>
                        </div>
                       
                    </div>
                </div>
            </div>
          
            })}
       </React.Fragment>
    )
}

export default OfferModel;