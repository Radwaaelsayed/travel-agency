import React , {Component} from 'react'
import { connect } from 'react-redux'
import {addPost , getPosts} from '../action/action';
import { bindActionCreators } from 'redux';
import '../App.css'

let showModel ;

class AddPost extends Component {
    constructor(props) {
        super(props);
        if(this.props.user)
        this.state = {  
            creatorUserId: this.props.user.firstName,
            city:"",
            postContent :""
        }
      
    }



    addpost =async (e)=>{
     await  this.props.addPost(this.state)
     await this.props.getPosts();
   
    }
    render() { 
        console.log(showModel);
        if(!this.props.user) return "";
        return ( 
            <div className="container">
            <button type="button" className="btn  add-post" data-toggle="modal" data-target="#exampleModal">
            <i class="fas fa-plus"></i> Add New Post
            </button>  
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" >Add New Post</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <input type="text" className="form-control" id="validationTooltip01" placeholder="city...." required onChange={e=>this.setState({city : e.target.value})} />
                <form className="was-validated">
                    <div className="mb-3 mt-3">
                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="your post..." required onChange={e=>this.setState({postContent : e.target.value})}></textarea>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.addpost}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
          </div>
         );
    }
}
 
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addPost , getPosts},dispatch)
}
export default connect(null,mapDispatchToProps)(AddPost)
