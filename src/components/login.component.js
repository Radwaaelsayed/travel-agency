import React, { Component, useEffect } from "react";
import '../App.css';
import axios from 'axios'
export default class Login extends Component {


handelSubmit = async (e) =>{
  e.preventDefault();
if(this.email && this.password)
  {const data = await{
    email:this.email,
    password:this.password
  }
  console.log(data)

 await   axios.post('https://iti-travel-agency.herokuapp.com/api/user/signin',data)
    .then(res => {
       localStorage.setItem("user" , JSON.stringify( res.data))
       console.log(JSON.stringify( res.data))
       window.location.replace('/')
      })
    .catch(err=>
      alert("wronge password or email")
      )

   
  }else{
    alert("please enter password and email")
  }
  
}
  




  render() {
    return (
      <div class="page-header header-filter login mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <div class="card card-login">
              <form class="form" method="" action="">
                <div class="card-header card-header-primary text-center">
                  <h4 class="card-title">Login</h4>

                </div>
                <div class="card-body">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email..." onChange={e=>this.email = e.target.value}/>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                      <i class="fas fa-lock"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password..." onChange={e=>this.password = e.target.value}/>
                  </div>
                </div>
                <div class="footer text-center">
                  <button onClick={this.handelSubmit} class="btn btn-primary btn-link btn-wd btn-lg">Login</button>
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
