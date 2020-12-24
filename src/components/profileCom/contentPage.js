import AccountCard from './cards/myAccountCard'
import CardProfile from './cards/profileCard'
const ContentPage=(props)=>{
    return(
     <div className="container-fluid mt--7" >
        <div className="row" >
        <CardProfile user={props.user}/>
        <AccountCard user={props.user}/>
        </div>
    </div>

    )
}

export default ContentPage;