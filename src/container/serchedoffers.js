import { connect } from 'react-redux'
import Loading from '../components/loading'

import {Link} from 'react-router-dom';

const SearchedOffers = ({customList}) =>{
    let images  = [".././images/4.jpg" ,".././images/5.jpg",".././images/6.jpg",".././images/7.jpg",".././images/8.jpg",".././images/9.jpg",".././images/10.jpg",".././images/11.jpg",".././images/12.jpg",".././images/13.jpg" ]

const renderBody = list =>{
    if(customList) 
    {
       return list.map(item => {
          return (
            <div class="media border-top mt-3 border-light">
            <img src={images[Math.floor(Math.random() * images.length +[item.offer_guestCurrentNo])]} class="mr-3 rounded-circle p-3" style={{width:"7rem",height:"7rem"}} alt="..."/>
            <div class="media-body p-4">
            <h5 className="offer-title">
            <Link to={{
                              pathname : `/offerdetails`,
                              state : item
                              }}  
                               className="offer-link">{item.offer_title}</Link>
            </h5>
            <div className="offer-price">
                            <span>{item.tripCost}</span>
                            <span>LE</span>     
                        </div>
                        
                        <div className="offer-city">
                            <span><i class="fa fa-map-marker" ></i></span>
                            <span className="ml-1">{item.offer_city}</span>
             </div>           
              </div>
          </div>
        )
       })
    }else return ""
}


    return(
        <div>
              {renderBody(customList)}
        </div>
       
      )
}

const mapStateToProps = (state) => {
    console.log("customlist", state)
    return {
        customList: state.offer.customlist
    }
}
export default connect(mapStateToProps)(SearchedOffers)