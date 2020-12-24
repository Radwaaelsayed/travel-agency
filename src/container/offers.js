
import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getOffers} from '../action/action';
import OfferModel from '../components/offermodel';
import Pagination from '../components/pagination';
import Loading from '../components/loading';

const Offers = (props) => {

    useEffect(()=>{
        props.getOffers();
        const getoffer = async ()=>{
        }
        getoffer()
        
},[])

    
    const [loading ] = useState(false) ;
    const [currentPage , setCurrentPage] = useState(1);
    const [offersPerPage ] = useState(8);
          
         let    indexOfLastoffer = currentPage * offersPerPage;
         let    indexOfFirstoffer = indexOfLastoffer - offersPerPage;
        
    
    const paginate = (pageNumber) =>{setCurrentPage(pageNumber)}
    
        
    if(!props.offers) return <Loading/>
    return(
        <React.Fragment>
            <div className="container ">
              <h2 className="text-center h1 mt-5"> Offers </h2>
              <hr className="seprator mb-4"></hr>
              <p className="text-center h6 m-auto w-50">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            <div className="row">
             <OfferModel offers={props.offers.slice(indexOfFirstoffer,indexOfLastoffer)} loading={loading}/>
             </div>
             <div className="row m-3">
             <Pagination offersPerPage={offersPerPage} totaloffers={props.offers.length}  paginate={paginate}/>
             </div>
        </div>
        </React.Fragment>
        
    )

}
  
export default connect(
    (state)=>{
        console.log('state' , state)
        return {
            offers : state.offer.list
        }     
    },
    (dispatch)=>{
        return bindActionCreators({getOffers},dispatch)
    }
)(Offers);