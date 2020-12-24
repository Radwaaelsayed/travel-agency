import { connect } from 'react-redux'
import {getCustomPosts , editResponse ,deleteCustomOffer , addToCart} from '../action/action'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'

const CustomPostModel = (props) =>{

useEffect(()=>{
    props.getCustomPosts();
    console.log(props);
   
},[])


const handelResponse = (e,response , offerid , offer) =>{

    const addedoffer = {
        offerId : offerid,
        travelerNum : offer.personNumber,
        coast : offer.price
       
    }
    

 if(response.deal == false){
    response.deal  = true
    
    e.target.style.color = "#08d9d6";
    props.addToCart(props.user._id , addedoffer)
    console.log(offerid)
   
 }else{
    response.deal  = false
    e.target.style.color = "lightgray";
 }
  const  data = [{
        companyid : response.companyid,
        deal : response.deal,
        details : response.details,
        price : response.price
     }]
    
 

 props.editResponse(offerid ,response.companyid )
 console.log(response)

}

const handelDelete = async (id , offer) =>{
    if(id&&offer)
      await props.deleteCustomOffer(id , offer)
      await props.getCustomPosts()
}


const renderBody = (customOffers) =>{
    if(customOffers)
    {
        return customOffers.map((offer)=>{
             if(offer.userId == props.user._id){
                return(
                    <div className="card p-3 mt-3 text-left position-relative" key={offer._id}>
                        <button className="" 
                             style={{ backgroundColor:"transparent" , border:0 , fontSize:"1.5rem" , color:"gray" , outline:0}}
                             onClick = {()=>handelDelete(offer._id , offer)}
                             >
                            <i class="far fa-times-circle position-absolute" style={{right:"-4px" ,top:"-4px" }}></i>
                            
                        </button>
                    <footer className="footer bg-white">
                        <div className="d-flex flex-column justify-content-center">
                        <p className="p-0">
                        <i className="fas fa-map-marker-alt ml-2 mr-1" style={{fontSize:"1.2rem"}}></i>    {offer.city}
                        </p>
                        <p className="p-0">
                        <i class="far fa-building ml-2 mr-1" style={{fontSize:"1.2rem"}}></i>   {offer.HotelName} -  {offer.rate} stars
                        </p>
                        <p className="p-0">                      
                        </p>
                        <p className="p-0">
                         <i class="fa fa-calendar calender ml-2 mr-1" style={{fontSize:"1.2rem"}}></i>   From : {offer.dateFrom.slice(0,10)} -  To :  {offer.dateTo.slice(0,10)}
                        </p>
                        <p className="p-0">
                          <i class="fas fa-user-friends ml-2 mr-1" style={{fontSize:"1.2rem"}}></i>     {offer.personNumber} guests
                        </p>
                        </div>
                        <div className="accordion" id="accordionExample">
                        <div className="card border-0">
                            <div className="card-header" id={offer._id}>
                            <h2 className="mb-0 d-flex  justify-content-around comments-interact">
                                <button className="btn btn-link comment" type="button" data-toggle="collapse" data-target={`#collapse${offer._id}`} aria-expanded="true" aria-controls="collapseOne">
                                  <span><i className="fa fa-comment"></i> {offer.companiesResponse.length} </span>
                                </button>
                            </h2>
                            </div>
    
                            <div id={`collapse${offer._id}`} className="collapse show" aria-labelledby={offer._id} data-parent="#accordionExample">
                                <div className="card-body">
                                {offer.companiesResponse.map((response)=>{
                                    console.log(response)
                                    return(
                                        <div className="comment-display rounded-pill">
                                        <div className="comment-name mt-1"> trip cost : {response.price}</div>
                                        <div className="d-flex justify-content-between">
                                        <div className="comment-content">trip details : {response.companyDetails}</div>
                                        <div>
                                        <button 
                                        style={{backgroundColor: "transparent",
                                            color: "lightgray",
                                            fontSize:" 21px"}}
                                        className="add-btn mr-1 p-2 rounded-pill" 
                                        onClick={(e)=>handelResponse(e,response , offer._id , offer)} ><i class="fa fa-check-circle"></i></button>                                        
                                        </div>
                                        </div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                       </div>
                      </footer>   
                      </div>   
    
                )
            }
          
           
        })
    } else{
            return <h2>there is no special offers</h2>
        }

}
console.log(props)
    return(
        <div className="container mt-3 mb-3">
            <div class="col"> 
                {renderBody(props.customoffers)}
             </div> 
      </div>
    )
}


export default connect(
    (state)=>{
        console.log(state)
    return {
        customoffers : state.customOffers.newpost
    }
},(dispatch)=>{
    return bindActionCreators({getCustomPosts , editResponse , deleteCustomOffer , addToCart},dispatch)
})(CustomPostModel)