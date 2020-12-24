
import React ,{Component} from 'react';
import Offersmodel from '../container/offers';
import OfferSearch from '../container/offersearch';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   
    render() { 
        return ( 
            <React.Fragment>
              <OfferSearch/>
              <Offersmodel/>
            </React.Fragment>
           
            
         );
    }
}
 
export default Home;