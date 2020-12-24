import {Link} from 'react-router-dom'
import {Component  } from "react";
import { deleteFromCart , getOffers } from "../../../action/action";
import {getCart } from "../../../action/index"
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
let images  = [".././images/4.jpg" ,".././images/5.jpg",".././images/6.jpg",".././images/7.jpg",".././images/8.jpg",".././images/9.jpg",".././images/10.jpg",".././images/11.jpg",".././images/12.jpg",".././images/13.jpg" ]


 class MyCart extends Component {

     constructor(){
         super();
         this.id=""
         this.state={
         }
     }


    handelDelete =async (item) =>{
            await this.props.deleteFromCart(this.props.user._id,item)
            window.location.reload(true)   
    } 
   

    renderList(){
    if(this.props.user && this.props.offers){
        const cart=this.props.user.cart
        const cartList=cart;
       
        return cartList.map((item,index)=>(  
            this.props.offers.map(offer => {
                if(offer._id == item.offerId)
              return  <div key={index} className="card bg-grey m-3 p-3" style={{ width: "20rem" }}>
                <div className="media-1">
                <Link to="#" className="d-block mb-3">
                <img src={images[Math.floor(Math.random() * images.length +[item.offer_guestCurrentNo])]} class="w-100 mh-100 p-2" style={{width:"7rem",height:"7rem"}} alt="..."/>
                </Link>
                <div className="d-flex justify-content-between">
                    <div>
                        <h3 style={{fontSize:"1.5rem"}}><Link to={{
                            pathname : "/offerdetails",
                            state : offer}}>
                                {offer.offer_title}
                                </Link>
                        </h3>
                    </div>
                    <div className="offer-price">
                            <span>{offer.tripCost}</span>
                            <span>LE</span>     
                        </div>
                </div>
                <span className="d-flex justify-content-between loc">
                   <span><i class="fa fa-map-marker" ></i> <span className="ml-1">{offer.offer_city}</span></span>
                    <button 
                        className="btn btn-sm btn-info " 
                        onClick={()=>this.handelDelete(item)}>
                        Cancel Trip
                    </button>
    
                </span>
            </div>
            </div>
            }) 
           

        ))
    }

    }
    render(){

        return(
            <div className="pl-lg-4">
            <div className="pl-lg-4  d-flex flex-wrap justify-content-start">
                {this.renderList()}
     
            </div>
            <div>
                
            </div>
        </div>

        )
        
    }

    componentDidMount(){
        this.props.getCart()
        this.props.getOffers()
       
      
    }
}

const mapDispatchToPrp=(dispatch)=>{
    return bindActionCreators({getCart,deleteFromCart , getOffers}, dispatch)
}

const mapState=(state)=>{
    console.log(state,"NEW STATE")
    return{
        carts:state.profileReducers,
        offers : state.offer.list
    }
}

export default connect(mapState,mapDispatchToPrp)(MyCart)
