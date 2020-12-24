import {Link} from 'react-router-dom'
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { getCart } from "../../../action/index";
import UserUpdate from "../userUpdate"

class CardProfile extends Component{

    renderList=()=>{
        const info=this.props.user
        if(info){
            return(
                <div className="card-body pt-0 pt-md-4 position-relative">
                <div className="row">
                    <div className="col mt-5">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5 mt-5">
                            <div>
                                <span className="heading">{info.cart.length}</span>
                                <span className="description">Cart</span>
                            </div>
                            
                            <div>
                                <span className="heading">89</span>
                                <span className="description">Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h3>
                        {`${info.firstName} ${info.LastName}`}<span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>Monofia, Egypt
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                        <i className="ni education_hat mr-2"></i>University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                 
                </div>
                
            </div>
            )
        }

    }
    render(){
        return(
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
        <div className="card card-profile shadow " style={{top:"-25px"}}>
            <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                        <Link to="#">
                            <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle" alt="ProfileImage" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">

                    {this.renderList()}
                   
                </div>
            </div>
         
        </div>
    </div>

        )
    }

    componentDidMount(){
        this.props.getCart()
    }
  
}

const mapDispatchToPrp=(dispatch)=>{
    return bindActionCreators({getCart}, dispatch)
}

const mapState=(state)=>{
    console.log(state,"NEW STATE")
    return{
        carts:state.profileReducers.list
    }
}

export default connect(mapState,mapDispatchToPrp)(CardProfile)
