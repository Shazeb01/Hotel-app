import React from 'react';
import Quicksearch from './QuickDisplay';
import Search from './Search';

const Home = () => {
    return(
        <div>
            <Search/>
            <Quicksearch/>
        </div>
    )
}

export default Home;