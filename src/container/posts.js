import React from 'react' 
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {getPosts} from '../action/action'
import { useEffect } from 'react';
import PostCard from '../container/postcard';
import Loading from '../components/loading';
import PostSearch from '../container/postsearch';

import '../App.css'
import AddPost from './addpost';
import { Component } from 'react';

class  Posts extends Component {

    componentDidMount(){
        this.props.getPosts();
     
    }
  
    
    
render(){
if(!this.props.posts) return <Loading/>
    return(
        <React.Fragment>
          <PostSearch/>
          <AddPost user={this.props.user}/>
          <PostCard posts={this.props.posts} user={this.props.user}/>
        </React.Fragment>
      
    )
}
}

export default connect(
    (state)=>{
        console.log(state)
        return{
            posts : state.posts.posts,
        }
    },
    (dispatch)=>{
        return bindActionCreators({getPosts},dispatch)
    }
) (Posts);