import { Component } from "react";
import AddCustomOffer from "../container/addcustomoffer";
import CustomPostModel from "../container/customoffermodel";



class CustomOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <AddCustomOffer user={this.props.user}/>
            <CustomPostModel user={this.props.user}/>
            </div>
         );
    }
}
 
export default CustomOffer;