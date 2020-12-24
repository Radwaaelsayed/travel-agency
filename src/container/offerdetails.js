import { Component } from 'react';
import { connect } from 'react-redux'
import { getOfferDetails,clearOfferDetails } from '../action/action'
import { bindActionCreators } from 'redux'
import OfferDetailsModel from '../components/offerdetailsmodel';


class OfferDetails extends Component {


    render() {
        console.log(this.props.location.state , "offerdetails component")
        const  offerDetails  = this.props.location.state
        if (offerDetails) {
            return (
                <div >
                    <OfferDetailsModel offerDetails={offerDetails} user = {this.props.user} />
                </div>
            )
        }

        return <p className="text-danger">No details available.</p>
    }

    componentDidMount() {
        this.props.getOfferDetails(this.props.match.params.id)
        console.log(this.props.match)
    }

    componentWillUnmount(){
        this.props.clearOfferDetails()
    }

    
}



export default connect(
    (state) => {
        console.log('details', state)
        return {
            offerDetails: state.offer.details
        }
    },
    (dispatch) => {
        return bindActionCreators({ getOfferDetails ,clearOfferDetails}, dispatch)
    }
)(OfferDetails)