import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import Hotellist from './hotellisting/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/list/:id' component={Hotellist}/>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Routing;