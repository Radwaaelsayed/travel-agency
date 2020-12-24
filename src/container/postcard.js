
import { Component } from "react";
import '../App.css';
import { connect } from 'react-redux';
import {addComment , getPosts} from '../action/action';
import { bindActionCreators } from 'redux'; 


const d = new Date()  
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
const monthName = months[d.getMonth()]  
let count;
let  ratecount=1;



class PostCard extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            likes:0,
            rate:1,
        }
    }

  

 
     handelLike = (event) =>{
        if(event.target.style.color === ""){
            event.target.style.color="red";
            count=1
        }else{
            event.target.style.color="";
            count = 0
            
        }
        this.setState({likes : count})
    }    

    changeRate = (event)=> {
        
        let classes = event.target.className;
        console.log(classes)
       if(classes === event.target.className) {
        if(ratecount<=5){
          if(event.target.style.color === ""){
            event.target.style.color="#08d9d6";
            ratecount++
        }else{
            event.target.style.color="";
            ratecount -= 1
            
        }
    }else{
        ratecount = 1
    }
        this.setState({rate : ratecount})
        console.log(event.target.className)
}else{
    ratecount = 1;
    this.setState({rate : ratecount})
}
console.log(ratecount)
    }

     handelRate = async(id,content ) =>{
         const data = {
              commentContent: content,
             rate : this.state.rate
         }
        // const res = await axios.put(`http://localhost:8000/api/posts/comment/${id}`);
        // const data = await res.data;
      
         console.log(data )
    }    

     handelAddComment =async (id) =>{  
        const comment = {  
                 post_id : id,
                 creatorName:this.props.user.firstName ,
                 commentContent : this.commentContent
                }    
              await  this.props.addComment(comment);
              await  this.props.getPosts()
             this.inputValue.value = ""
            
    }

 
 renderBody = (posts , user) =>{
    if(user){
        return posts.map((post) => {
            return(
               <div className="card col-lg-5 col-md-11 col-11 mb-4 p-3 mx-auto" key={post._id} style={{width:"50em"}}>
                <blockquote className="blockquote  mb-0">
                  <p className="date">POSTED ON :{d.getDay()} {monthName},{d.getFullYear()} </p>
                  <p>{post.postContent}</p>
                <footer className="footer bg-white">
                    <div className="accordion" id="accordionExample">
                    <div className="card border-0">
                        <div className="card-header" id={post.id}>
                        <h2 className="mb-0 d-flex  justify-content-around comments-interact">
                            <button onClick={this.handelLike} className="like"><i className="fa fa-heart" ></i> </button>
                            <button className="btn btn-link comment" type="button" data-toggle="collapse" data-target={`#collapse${post._id}`} aria-expanded="true" aria-controls="collapseOne">
                              <span><i className="fa fa-comment"></i>  {post.commentsId.length} </span>
                            </button>
                        </h2>
                        </div>

                        <div id={`collapse${post._id}`} class="collapse show" aria-labelledby={post.id} data-parent="#accordionExample">
                        <div class="card-body">
                            {post.commentsId.map((comment)=>{
                                return(
                                    <div className="comment-display rounded-pill" key={comment._id}>
                                    <div className="comment-name">{comment.creatorName}</div>
                                    <div className="d-flex justify-content-around">
                                    <div className="comment-content">{comment.commentContent}</div>
                                    <div onClick={()=>this.handelRate(comment._id , comment.commentContent)}>
                                    <button onClick={this.changeRate}  className="like"><i className={`fa fa-star ${comment._id}`} ></i> </button>
                                    <button onClick={this.changeRate}  className="like"><i className={`fa fa-star ${comment._id}`} > </i> </button>
                                    <button onClick={this.changeRate}  className="like"><i className={`fa fa-star ${comment._id}`} > </i> </button>
                                    <button onClick={this.changeRate}  className="like"><i className={`fa fa-star ${comment._id}`} > </i> </button>
                                    <button onClick={this.changeRate}  className="like"><i className={`fa fa-star ${comment._id}`} > </i> </button>

                                    </div>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div >
                        <input type="text" 
                        placeholder="enter your comment" 
                        className="rounded-pill p-2 w-100 position-relative comment-input"  
                        onChange={e=>{
                            this.commentContent = e.target.value
                            this.inputValue = e.target
                            }}/>
                        <button onClick={()=>this.handelAddComment(post._id)} className="add-btn position-absolute">Add</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
                </blockquote>
               </div>
            )
        })
    }else{
        return( posts.map((post) => {
                return(
                   <div class="card col-5 m-1 text-left" key={post._id}>
                    <blockquote class="blockquote  mb-0">
                      <p className="date">POSTED ON :{d.getDay()} {monthName},{d.getFullYear()} </p>
                      <p>{post.postContent}</p>
                    <footer class="footer bg-white">
                        <small class="d-flex">
                           
                        </small>
                        <div class="accordion" id="accordionExample">
                        <div class="card border-0">
                            <div class="card-header" id={post.id}>
                            <h2 class="mb-0 d-flex  justify-content-around comments-interact">
                                <button onClick={this.handelLike} className="like"><i className="fa fa-heart" ></i> </button>
                                <button class="btn btn-link comment" type="button" data-toggle="collapse" data-target={`#collapse${post._id}`} aria-expanded="true" aria-controls="collapseOne">
                                  <span><i className="fa fa-comment"></i>  {post.commentsId.length} </span>
                                </button>
                            </h2>
                            </div>
    
                            <div id={`collapse${post._id}`} class="collapse show" aria-labelledby={post.id} data-parent="#accordionExample">
                            <div class="card-body">
                                {post.commentsId.map((comment)=>{
                                    return(
                                        <div className="comment-display rounded-pill">
                                        <div className="comment-name">{comment.creatorName}</div>
                                        <div className="d-flex justify-content-around">
                                        <div className="comment-content">{comment.commentContent}</div>
                                        <div>
                                        <button onClick={this.handelRate} className="like"><i className="fa fa-star" ></i> </button>
                                        <button onClick={this.handelRate} className="like"><i className="fa fa-star" > </i> </button>
                                        <button onClick={this.handelRate} className="like"><i className="fa fa-star" > </i> </button>
                                        <button onClick={this.handelRate} className="like"><i className="fa fa-star" > </i> </button>
                                        <button onClick={this.handelRate} className="like"><i className="fa fa-star" > </i> </button>
    
                                        </div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                        </div>
                    </footer>
                    </blockquote>
                   </div>
                )
            }
        )
    )}
}


render(){
    const {posts , user} = this.props
     return (  
     <div className="container mt-3 mb-3">
        
            <div class="row d-flex"> 
                {this.renderBody(posts , user)}
             </div>
         
      </div>
        )}
    
}
 
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addComment , getPosts},dispatch)
}
export default connect(null,mapDispatchToProps)(PostCard)
