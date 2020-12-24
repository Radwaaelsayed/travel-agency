import {combineReducers} from 'redux';
const initialState = {
    offers: [],
    post : [],
    comment:[],
    customoffer:[],
    cart : [],
    user : []
  };

  const users = (state=initialState.user , action) =>{
    switch(action.type){
      case "USER_SIGNUP":{
        let user;
          if(state.user)
            user =  state.user.push(action.payload)
           console.log(user)
            return {...state , user}
      }
      default : {
        return state
      }
    }
  }
    
  const offer = (state = initialState.offers , action) =>{
      switch(action.type){
          case "GET_OFFERS":{
              return { ...state , list : action.payload};
          }
          case "GET_OFFER_DETAILS":{
            return {...state , details:action.payload}
          }
          case "OFFER_SEARCH" :{
              return {...state , customlist:action.payload}
          }
          case "CLEAR_DETAILS" :{
               return {...state , details:action.payload}
          }
          
          default:{
              return state;
          }
      }
  }

  const posts =  (state = initialState.post , action)=>{
      switch(action.type){
        case "GET_POSTS" :{
            return {...state , posts:action.payload}
        }
        case "GET_POST_BY_CITY":{
            return {...state , posts:action.payload}
        }
        case "ADD_POST":{
          let post;
          if(state.post)
            post =  state.post.push(action.payload)
           console.log(post)
            return {...state , post}
          }
        default:{
            return state
        }
      }
  }

  const comments =  (state =initialState.comment , action) => {
      switch(action.type){
          case "ADD_COMMENT":{
            let comment;
            if(state.comment)
             comment =  state.comment.push(action.payload)
            console.log(comment)
            return  {...state , comment}
          }
          default:{
            return state
        }

      }
  }

  const customOffers =  (state = initialState.customoffer , action) =>{
    switch(action.type){
        case "ADD_CUSTOM_OFFER":{
          let offer;
          if( state.customoffer)
             offer =  state.customoffer.push(action.payload)
            return {...state , offer}
        }
        case "GET_CUSTOM_POSTS" :{
            console.log(state)
            return {...state , newpost:action.payload}
        }
        case "EDIT_RESPONSE" :{
          console.log(state)
          return {...state , newpost:action.payload}
        }
        case "DELETE_CUSTOM_OFFER" :{
          return {...state}
        }
        default:{
          return state
      }

    }
  }

  const profileReducers=(state={},action)=>{
    switch(action.type){     
        case 'MYCART':{
            return{ ...state,list:action.payload }
        }

        case "USERUPDATE":{
           return{ ...state }
        }

        case"DELETEFROMCART":{
            return{...state}
        }
        default:{
           return{ state}
        }
    }
}

const carts = (state = initialState.cart , action)=>{
   switch(action.type){
     case "ADD_TO_CART" : {
       let item ; 
       if(state.cart)
       item =  state.cart.push(action.payload)
      console.log(item)
       return {...state , item}
     }
     case"DELETE_FROM_CART":{
      return {...state}
  }
  default : {
    return state
  }
   }
}



  export default combineReducers({offer,posts,comments,customOffers,profileReducers , carts , users});