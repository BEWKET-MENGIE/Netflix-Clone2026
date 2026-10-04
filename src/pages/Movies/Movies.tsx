import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import Row from '../../component/Rows/Row/Row';
import requests from '../../Utils/Requests';

function Movies() {
    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Footer />
        </div>
    );
}

export default Movies;