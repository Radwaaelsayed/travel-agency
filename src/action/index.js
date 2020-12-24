import axios from 'axios'
const baseUrl="https://iti-travel-agency.herokuapp.com/"

export async function getCart(data){
    try {
        let response= await axios.post(`${baseUrl}api/user/signin`,data)
        let payload=  response.data
    return{
        type:"MYCART",
        payload
    }
        
    } catch (error) {
        console.log(error,"errrrrrr")
        
    }
    
}

export async function userUpdate(info){
try {
    const response=await axios.put(`${baseUrl}api/user/update`,info);
    let payload= response.data
    return{
        type:'USERUPDATE',
        payload
    }
}catch (error) {
    console.log(error,"in update")
    
}
}


export  const cartDelete = async (id,data) => {
    try {
        
        const response=await axios.delete(`${baseUrl}api/offers/deletecart/${id}`,data);
        let payload= response.data
        return{
            type:'DELETEFROMCART',
            payload
        }
    }catch (error) {
        console.log(error,"in update")
        
    }
    }




    
    
























