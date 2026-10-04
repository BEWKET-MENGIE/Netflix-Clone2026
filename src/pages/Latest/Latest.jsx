import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import Row from '../../component/Rows/Row/Row';
import requests from '../../Utils/Requests';

function Latest() {
    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <Row title="New Releases" fetchUrl={requests.fetchTrending} isLargeRow={true} />
            <Row title="Top Rated Content" fetchUrl={requests.fetchTopRated} />
            <Footer />
        </div>
    );
}

export default Latest;