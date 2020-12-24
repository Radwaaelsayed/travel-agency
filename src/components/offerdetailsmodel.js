import '../App.css'
import {addToCart} from '../action/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OfferDetailsModel = ({offerDetails ,user , addToCart}) =>{

const handelAdd = async() =>{
    const data = {
        offerId : offerDetails._id,
        travelerNum : 1,
        coast : offerDetails.offer_cost
    }
 await addToCart(user._id ,data )
 
 toast('added to cart' , {
     className : "custom-toast",
     draggable : true , 
     position : toast.POSITION.TOP_RIGHT,
     hideProgressBar : true
 } )
}
 let images  = [".././images/4.jpg" ,".././images/5.jpg",".././images/6.jpg",".././images/7.jpg",".././images/8.jpg",".././images/9.jpg",".././images/10.jpg",".././images/11.jpg",".././images/12.jpg",".././images/13.jpg" ]
 var randomNum = Math.floor(Math.random() * images.length);  

 return (
        <div className="container">
           <ToastContainer hideProgressBar="0" />
            <div className="row">
                <div className="col mt-5 mb-5">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={images[randomNum]} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={images[randomNum+1]} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={images[randomNum+1]} class="d-block w-100" alt="..." />
                    </div>
                </div>
                </div>
                </div>
                <div className="col mt-5 mb-5">
                <div className=" border-0">
                <div className="card-body">
                    <h5 className="card-title h1">{offerDetails.offer_title.charAt(0).toUpperCase() + offerDetails.offer_title.slice(1)}</h5>                
                    <p className="card-text offerDetails-text"> <i class="fa fa-calendar calender" ></i> {offerDetails.offer_dateFrom.slice(0,10)} -  {offerDetails.offer_dateTo.slice(0,10)}</p>
                    <p className="card-text offerDetails-text ml-3"> Number Of Guests : {offerDetails.offer_guestTotalNo}</p>
                    <p className="card-text offerDetails-text ml-3"> Total Cost : {offerDetails.tripCost}</p>
                    <label className="ml-3">  Tour description: </label>
                    <p className="card-text offerDetails-text ml-4"> {offerDetails.offer_details}</p> 
                    <button  className="btn btn-primary"  onClick={()=>{handelAdd()}}>Add To Cart</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addToCart},dispatch)
}
export default connect(null,mapDispatchToProps)(OfferDetailsModel)

