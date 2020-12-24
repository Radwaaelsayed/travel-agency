import React, { Component } from "react";
import '../App.css';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {userSignUp} from '../action/action'
import { ToastContainer } from "react-toastify";

 class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {  
       emailError : "",
       reemailError : "" ,
       passError : "",
       formError : "",
       error : ""
    }
  

  }
validation = () =>{
  if(this.email !== this.reemail){
    const error = "email not matchs"
    this.setState({reemailError:error})

  } else{
    this.setState({reemailError:""})
  }

  if(this.email){
    let lastAtPos = this.email.lastIndexOf('@');
    let lastDotPos = this.email.lastIndexOf('.');
    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.email.length - lastDotPos) > 2)) {
      this.setState({emailError:"mail not true"})
    }else{
      this.setState({emailError:""})
    }
  }else{
    this.setState({emailError:""})
  }
 

if(this.password !== this.repass){
  const passError = "password not match"
  this.setState({passError})
}else{
  this.setState({passError : ""})
}


}


handelSubmit = async (e) =>{
  e.preventDefault()
  if(this.firstName && this.LastName && this.password && this.email && this.phone){
    const data = await  {
      firstName : this.firstName,
      LastName : this.LastName,
      password : this.password,
      email : this.email,
      phoneNum : this.phone
    }
    await this.setState({error : ""})
    await  this.props.userSignUp(data)
    window.location.replace('/login')
  }else{
    this.setState({error : "fill all fields"})
   
  }
 
}


  render() {
    return (
      <div class="page-header header-filter login mb-4 p-0 min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <div class="card card-login h-75">
              <form class="form" method="" action="">
                <div class="card-header card-header-primary text-center">
                  <h4 class="card-title">Sign Up</h4>
                </div>
                <div class="card-body">
                <h6 className="ml-5 alert-danger">{this.state.formError}</h6>

                <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="far fa-user-circle"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder=" First name..." required onChange={e=>this.firstName = e.target.value}/>
                    <input type="text" className="form-control ml-1" placeholder="Last name..." required onChange={e=>this.LastName = e.target.value}/>

                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Email..." 
                    required
                     onChange={e=>{
                       this.email = e.target.value
                       this.validation()}}/>
                  </div>
                  <h6 className="ml-5 alert-danger">{this.state.emailError}</h6>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="email" 
                    className="form-control" 
                    required placeholder="Rewrite Your Email..." 
                    onChange={e=>{
                      this.reemail = e.target.value
                      this.validation()
                      }}/>
                    </div>
                    <h6 className="ml-5 alert-danger">{this.state.reemailError}</h6>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password..." required onChange={e=>this.password = e.target.value}/>
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <input type="password" 
                    className="form-control"
                     required 
                     placeholder="Rewrite Your Password..."
                     onChange={e=>{
                      this.repass = e.target.value
                      this.validation()
                      }} />
                  </div>
                  <h6 className="ml-5 alert-danger">{this.state.passError}</h6>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fas fa-phone"></i>
                      </span>
                    </div>
                    <input type="number" className="form-control" placeholder="phone number..." required onChange={e=>this.phone = e.target.value}/>
                  </div>
                </div>
                <div className="footer text-center">
                <h6 className="mt-3 p-2 text-center" style={{color:"red" , fontSize:"19px"}}>{this.state.error}</h6>

                  <button onClick={this.handelSubmit} className="btn btn-primary btn-link btn-wd btn-lg">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     </div> 
    );
  }
}


const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({userSignUp},dispatch)
}
export default connect(null,mapDispatchToProps)(SignUp)