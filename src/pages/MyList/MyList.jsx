import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import Row from '../../component/Rows/Row/Row';
import requests from '../../Utils/Requests';

function MyList() {
    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <Row title="My Saved Watchlist" fetchUrl={requests.fetchActionMovies} isLargeRow={true} />
            <Row title="Continue Watching" fetchUrl={requests.fetchComedyMovies} />
            <Footer />
        </div>
    );
}

export default MyList;