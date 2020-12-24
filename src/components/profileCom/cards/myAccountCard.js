import UserUpdate from "../userUpdate"
import BodyAcc from "./accountBody"

const AccountCard = (props) => {
    return (

        <div className="col-xl-8 order-xl-1" style={{top:"-25px"}} >
            <div className="card  shadow">
                 {/* Card Header */}
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">My account</h3>
                        </div>
                        <div className="col-4 text-right">
                            <UserUpdate user={props.user}/>
                        </div>
                    </div>
                </div>
                <BodyAcc user={props.user}/>

            </div>
        </div>

    )
}

export default AccountCard;