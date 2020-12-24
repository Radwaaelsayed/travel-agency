import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCart } from "../../../action/index";

class UserInformation extends Component{
    constructor(){
        super()
        this.state={}
        
    }

    renderList(){
        const userInfo=this.props.user
        if(userInfo){
            return(
                <div className="pl-lg-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group focused">
                            <label className="form-control-label" html htmlFor="input-username">Username</label>
                            <input type="text" id="input-username" className="form-control form-control-alternative bg-white" placeholder="Username" value={`${userInfo.firstName} ${userInfo.LastName}`} disabled />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Email address</label>
                            <input type="email" id="input-email" className="form-control form-control-alternative bg-white" placeholder={userInfo.email} disabled />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">First name</label>
                            <input type="text" id="input-first-name" className="form-control form-control-alternative bg-white" placeholder="First name" value={userInfo.firstName} disabled />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                            <input type="text" id="input-last-name" className="form-control form-control-alternative bg-white" placeholder="Last name" value={userInfo.LastName} disabled />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">Phone Number</label>
                            <input type="text" id="input-first-name" className="form-control form-control-alternative bg-white" placeholder="Phone Number" value={userInfo.phoneNum} disabled />
                        </div>
                    </div>
                </div>

            </div>
            )
        }

        

    }
    render(){
  
        return(
            
        <div className="pl-lg-4">
            {this.renderList()}
       
        <hr className="my-4" />
    </div>


        )
    }

    componentDidMount(){
        this.props.getCart(this.props.user)
    }
}

const mapDispatch=(dispatch)=>{
    return bindActionCreators({getCart},dispatch)
}

const mapState=(state)=>{
    return{
        carts:state.profileReducers.list
    }
}



export default connect(mapState,mapDispatch)(UserInformation)