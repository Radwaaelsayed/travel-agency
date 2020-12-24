import Address from "./address"
import MyCart from "./cart"
import UserInformation from "./user_Info"

const BodyAcc=(props)=>{
    console.log(props.user)
    return(
            
        <div className="card-body">
        <form>
        <h6 className=" text-muted mb-4">User information</h6>
            <UserInformation user={props.user}/>
            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <Address/>
            <h6 className="heading-small text-muted mb-4">Cart</h6>
            <MyCart user={props.user}/>
        </form>
        </div>

    )
}

export default BodyAcc