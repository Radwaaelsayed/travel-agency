import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userUpdate, getCart } from "../../action/index";
import Modal from "react-bootstrap/Modal";

class UserUpdate extends Component {
    constructor() {
        super()
        this.udateData = {}
        this.id = ""
        this.state = {
            data: {},
            open: false,
        }
    }

    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const details = this.props.userList
        if (details) {
            this.udateData.token = details.token
        
            if (this.udateData[name]!==value) {
                if(value===""){
                    delete this.udateData[name]
                }else{
                this.udateData[name] = value;
                this.setState({ data: this.udateData })
            }
            }
       
        }



    }

    sendData = async () => {

        this.udateData.token = this.state.data.token;
        console.log(this.state.data, "update Data");
        this.setState({ open: false });
        if(this.udateData.token)
        {await this.props.userUpdate( this.udateData)
        window.location.reload(true)
       }
        this.udateData={}

    }



    showModal = () => {
        this.setState({ open: true });
    };

    hideModal = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.showModal}>Edit Profile</button>
                <Modal show={this.state.open} onHide={this.hideModal}>
                    <Modal.Header>
                        <Modal.Title>Change Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body  >
                        <div>
                            <form>
                            <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" style={{ color: "#08d9d6" }} htmlFor="input-first-name">First name</label>
                                            <input type="text" id="input-first-name" name="firstName" onChange={this.change} className="form-control form-control-alternative bg-white" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" style={{ color: "#08d9d6" }} htmlFor="input-last-name">Last name</label>
                                            <input type="text" id="input-last-name" name='LastName' onChange={this.change} className="form-control form-control-alternative bg-white" placeholder="Last name" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" style={{ color: "#08d9d6" }} html htmlFor="input-username">password</label>
                                            <input type="text" id="input-username" name="password" onChange={this.change} className="form-control form-control-alternative bg-white" placeholder="password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group focused">
                                            <label className="form-control-label" style={{ color: "#08d9d6" }} htmlFor="input-first-name">phoneNum Number</label>
                                            <input type="text" id="input-first-name" name="phoneNum" onChange={this.change} className="form-control form-control-alternative bg-white" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg text-center'>
                                    <button type="button" onClick={this.sendData} className="btn btn-info text-center m-auto">update</button>
                                </div>

                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={this.hideModal}>Cancel</button>

                    </Modal.Footer>
                </Modal>

            </div>

        )
    }

    componentDidMount() {
        this.props.getCart()

    }
}
const mapState = (state) => {
    return {
        userList: state.profileReducers.list
    }

}

const mapDispatchToPrp = (dispatch) => {

    return bindActionCreators({ userUpdate, getCart }, dispatch)

}




export default connect(mapState, mapDispatchToPrp)(UserUpdate)