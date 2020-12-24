import {Component} from 'react';
import { connect } from 'react-redux'
import {addCustomOffer , getCustomPosts} from '../action/action';
import { bindActionCreators } from 'redux';

class AddCustomOffer extends Component {
    constructor(props) {
        super(props);
        if(this.props.user)
        this.state = {  
            userId: this.props.user._id,
            city:"",
            HotelName :"",
            rate:"",
            dateFrom : "",
            dateTo : "",
            optionBusInfo:{},
            personNumber:0,
        }
    }

    addoffer = async (e) =>{
        if(this.state)
          await   this.props.addCustomOffer(this.state)
          await this.props.getCustomPosts()
    }
    render() { 
        console.log(this.state)
        if(!this.props.user) return "";
        return ( 
            <div className="container">
            <button type="button" className="btn  add-post" data-toggle="modal" data-target="#exampleModal">
            <i class="fas fa-plus"></i> Add Custom Offer
            </button>  
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add New Post</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form >
                    <input type="text" className="form-control mt-2"  placeholder="city...." required onChange={e=>this.setState({city : e.target.value})} />
                    <input type="text" className="form-control mt-2"  placeholder="Hotel Name...."  onChange={e=>this.setState({HotelName : e.target.value})} />
                    <input type="number" className="form-control mt-2"  placeholder="Hotel Rate...."  onChange={e=>this.setState({ rate : e.target.value})} />  
                    <input type="date" className="form-control mt-2"  placeholder="Date From...."  onChange={e=>this.setState({dateFrom : e.target.value})} />
                    <input type="date" className="form-control mt-2"  placeholder="Date To...."  onChange={e=>this.setState({dateTo : e.target.value})} />  
                    <input type="number" className="form-control mt-2"  placeholder="Number Of Guests...."  onChange={e=>this.setState({ personNumber : e.target.value})} />  
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={this.addoffer}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
          </div>
         );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addCustomOffer , getCustomPosts},dispatch)
}
export default connect(null,mapDispatchToProps)(AddCustomOffer)


