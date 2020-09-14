import React, {Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location"
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(){
        super()
        this.state={
            location: '',
            hotels: ''
        }
    }

    handlecity = (event) => {
        var cityId = event.target.value;
        fetch(`${hurl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name}|{item.city_name}
                    </option>
                )
            })
        }
    }
    
    render(){
        return(
            <header>
                <div className="imageContainer">
                    <div id="logo">
                        <b>D!</b>
                    </div>
                    <div className="heading">
                        Plan Your Trip
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropDown" onChange={this.handlecity}>
                            <option>----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className='resturantsinput'>
                            <option>----SELECT YOUR HOTEL----</option>
                            {this.renderHotel(this.state.hotels)}
                        </select>
                    </div>
                </div>
            </header>
        )
    }
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            this.setState({location:data})
        })
    }
}


export default Search;