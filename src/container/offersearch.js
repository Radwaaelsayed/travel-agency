
import '../App.css';
import {Component} from 'react';
import {getOfferSearch} from '../action/action'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Loading from '../components/loading';
import Serchedoffers from './serchedoffers';

class OfferSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords:"",
          };
    }

    handelSearch = () =>{
             this.props.getOfferSearch(this.state.keywords)
             console.log(this.state.keywords)
    }
   

    render() { 
        return ( 
         <div className="container">
             <div className="row justify-content-center">
            <div className="col-10"
                style={{position: "relative",
                boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.1)",
                zIndex: 9,
                padding: "30px",
                background: "#ffffff",
                marginTop: "-50px",
                }}>

                    <form className="form-inline">
                        <div className="form-group col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                            <select id="inputState" className="form-control w-100 custom-select" onChange={(e)=>{this.setState({keywords:e.target.value})}}  value={this.state.keywords}>
                                <option selected>Choose City</option>
                                <option value="Alexandria">Alexandria</option>
                                <option value="Dahab">Dahab</option>
                                <option value="Fayoum">Fayoum</option>
                                <option value="North-Coast">North Coast</option>
                                <option value="Gharbia">Gharbia</option>
                                <option value="Menoufia">Menoufia</option>
                                <option value="El-Dakahlia">El-Dakahlia</option>
                                <option value="El-Sharqia">El-Sharqia</option>          
                                <option value="El-Beheira">El-Beheira</option>
                                <option value="Damietta">Damietta</option>
                                <option value="Matrouh">Matrouh</option>
                                <option value="El-Ismailia">El-Ismailia</option>
                                <option value="Hurghada">Hurghada</option>
                                <option value="Sharm-El-Sheikh">Sharm-El-Sheikh</option>
                                <option value="Portsaid">Portsaid</option>
                                <option value="Suez">Suez</option>
                                <option value="Luxor">Luxor</option>
                                <option value="El-Miniah">El-Minia</option>
                            </select>
                       </div>
                        <div className="form-group col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                            <input type="date" className="form-control inputs" id="inputdate" placeholder="12/12/2020"  />
                        </div>
                        <div className="form-group col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                           <input type="text" className="form-control inputs" id="inputnumber" placeholder="Enter #of People" />
                        </div>
                        <input type="button" 
                               value="search"
                               className="btn btn-infocol-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3  p-2" 
                               onClick={this.handelSearch}/>
                    </form>
                    <Serchedoffers/>
            </div>
           </div>
         </div>
         );
    }
}
 

export default connect(
    (state)=>{
    return {
        customList : state.offer.customlist
    }
},(dispatch)=>{
    return bindActionCreators({getOfferSearch},dispatch)
})(OfferSearch)