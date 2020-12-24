import axios from 'axios'

const baseURL= "https://iti-travel-agency.herokuapp.com/api/offers";
export const getOffers =async () =>{
    const response = await axios.get(baseURL);
    const data = await response.data
    return{
        type:"GET_OFFERS",
        payload:data
    }
   
}

export const  getOfferDetails = async (id) =>{
    const response = await axios.get(`${baseURL}/${id}`);
    const data = await response.data;
    
    return{
        type:"GET_OFFER_DETAILS",
        payload : data
    }

}

export const getOfferSearch = async (city,date="2020-12-12",number) =>{
    const response = await axios.get(`https://iti-travel-agency.herokuapp.com/api/offers/city/${city}`)
    const data =await response.data;
    return{
        type:"OFFER_SEARCH",
        payload:data
    }
}


export const clearOfferDetails = () =>{
    return{
        type:"CLEAR_DETAILS",
        payload : null
    }
}

export const getPosts = async () =>{
      const response = await axios.get('https://iti-travel-agency.herokuapp.com/api/guideme/posts/');
      const data = await response.data;
      console.log(data);
      return{
          type:"GET_POSTS",
          payload : data
      }
  }



export const getPostByCity = async (city) =>{
     const response = await axios.get(`https://iti-travel-agency.herokuapp.com/api/guideme/posts/${city}`);
     const data = await response.data;
     return{
         type:"GET_POST_BY_CITY",
         payload : data
     }
}

export const addPost = async (post) =>{
    const response = await axios.post('https://iti-travel-agency.herokuapp.com/api/guideme/posts' , post);
    const data = await response.data;
    return {
        type : "ADD_POST",
        payload : data
    }
}


export const addComment = async (comment) =>{
    const response =  await axios.post('https://iti-travel-agency.herokuapp.com/api/guideme/comment', comment);
    const data = await response.data;
    return{
        type : "ADD_COMMENT",
        payload : data
    }
}

export const addCustomOffer = async (customoffer) =>{
    const response = await axios.post('https://iti-travel-agency.herokuapp.com/api/specialoffer' , customoffer);
    const data = await response.data;
    return{
        type:"ADD_CUSTOM_OFFER",
        payload : data
    }
     

}

export const getCustomPosts = async () =>{
    const response = await axios.get('https://iti-travel-agency.herokuapp.com/api/specialoffer/');
    const data = await response.data;
    return{
        type:"GET_CUSTOM_POSTS",
        payload : data
    }
}


export const editCustomOfferResponse = async (id , offerdata) =>{
        const response = await axios.put(`https://iti-travel-agency.herokuapp.com/api/specialoffer/company/${id}` , offerdata)
        const data = await response.data
        return{
            type:"EDIT_RESPONSE",
            payload : data
        }
 
}

export const deleteCustomOffer = async (id , offer) =>{
    const response = await axios.delete(`https://iti-travel-agency.herokuapp.com/api/specialoffer/user/${id}` ,offer )
    const data = await response.data
    return{
        type : "DELETE_CUSTOM_OFFER",
        payload:data
    }
}






export async function addToCart(id , data){
        let response= await axios.post(`https://iti-travel-agency.herokuapp.com/api/offers/addcart/${id}`,data)
        let payload=  response.data

    return{
        type:"ADD_TO_CART",
        payload
    }
        
   
}

export const deleteFromCart = async (id , data) =>{
    try{
        let response = await axios.delete(`https://iti-travel-agency.herokuapp.com/api/offers/deletecart/${id}`,{data:data})
        let payload = response.data

        return{
            type:"DELETE_FROM_CART",
            payload
        }
    }catch (error){
        console.log(error)
    }
}

export const editResponse = async (offerid,companyid) =>{
    const response = await  axios.put(`https://iti-travel-agency.herokuapp.com/api/specialoffer/user/${offerid}/${companyid}`)
    let data = await response.data
    return{
        type:"EDIT_RESPONSE",
        payload : data
    }
} 

export const userSignUp = async (user) =>{
    const response = await axios.post('https://iti-travel-agency.herokuapp.com/api/user/signup',user)
    const data = await response.data
    return {
        type:"USER_SIGNUP",
        payload : data

    }
}