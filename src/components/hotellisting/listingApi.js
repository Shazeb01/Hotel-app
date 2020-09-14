import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist"


class Listing extends Component{
    constructor(){
        super()
        this.state={
            hotellist:''

        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        Filter Here
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listData={this.state.hotellist} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('tripid',tripid);
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default Listing;