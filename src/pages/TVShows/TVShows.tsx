import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import Row from '../../component/Rows/Row/Row';
import requests from '../../Utils/Requests';

function TVShows() {
    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Row title="Trending TV Shows" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated TV" fetchUrl={requests.fetchTopRated} />
            <Footer />
        </div>
    );
}

export default TVShows;