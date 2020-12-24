
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducer/index' ;
import promiseMiddleware from 'redux-promise'
import Offerdetails from './container/offerdetails';
import Offers from './container/offers';
import Posts from './container/posts';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import { Component } from 'react';

import CustomOffer from './components/customoffer';
import About from './components/aboutUs';
import MainProfile from './components/mainProfile';
import axios from 'axios'

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}

  componentDidMount = () =>{
    const user =JSON.parse(localStorage.getItem('user'))
    this.setState({user})
    
}

componentDidUpdate = () =>{
  if(this.state.user)
        {const data = {
            email:this.state.user.email,
            password:"123456"
          }
        
            axios.post('https://iti-travel-agency.herokuapp.com/api/user/signin',data)
            .then(res => {
               localStorage.setItem("user" , JSON.stringify( res.data))
               console.log(JSON.stringify( res.data))
              
              })
            .catch(err=>console.log(err))
        
          
          
        }
}
  
  render(){
  return (
    <Provider store={storeWithMiddleware(reducers)}>
    <Router>
      <Header user={this.state.user}/>
      <Switch>   
        <Route exact path="/offerdetails" component={(props)=><Offerdetails  {...props} user={this.state.user} />}/>
        <Route path="/offer" component={Offers}/>
        <Route path="/cusotmoffer" component={() => <CustomOffer user={this.state.user}/>}/>
        <Route path="/guideme" component={() => <Posts user={this.state.user}/>}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/profile" component={()=><MainProfile user={this.state.user}/>}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route 
            path="*" 
            render={()=>{
                  <p className="aleart aleart-danger text-center ">404 Page Not Found</p>
            }}
        />
      </Switch>
      <Footer/>
    </Router>
  </Provider>
  );
          }
}

export default App;
