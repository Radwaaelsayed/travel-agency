import '../profile.css'
import ContentPage from './profileCom/contentPage'
import NavProfile from './profileCom/navBar'
import Header from './profileCom/profileHeader'
const MainProfile=(props)=>{
    return(
        <div className="main-content">
            {/* <NavProfile/> */}
            {/* <Header/> */}
            <ContentPage user={props.user}/>
        </div>
    )
}

export default MainProfile