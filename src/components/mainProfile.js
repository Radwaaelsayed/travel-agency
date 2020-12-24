import { useEffect } from 'react'
import '../components/profileCom/profile.css'
import ContentPage from './profileCom/contentPage'
import NavProfile from './profileCom/navBar'
import Header from './profileCom/profileHeader';
import axios from 'axios';




const MainProfile=(props)=>{
    useEffect(()=>{
if(props.user)
        {const data = {
            email:props.user.email,
            password:"123456"
          }
        
            axios.post('https://iti-travel-agency.herokuapp.com/api/user/signin',data)
            .then(res => {
               localStorage.setItem("user" , JSON.stringify( res.data))
               console.log(JSON.stringify( res.data))
              
              })
            .catch(err=>console.log(err))
        
          
          
        }},[])     
    
    return(
        <div className="main-content">
            <ContentPage user={props.user}/>
        </div>
    )
}

export default MainProfile