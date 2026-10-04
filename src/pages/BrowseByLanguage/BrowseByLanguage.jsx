import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import Row from '../../component/Rows/Row/Row';
import requests from '../../Utils/requests';

function BrowseByLanguage() {
    return (
        <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <Row title="Documentaries & Foreign Language" fetchUrl={requests.fetchDocumentaries} isLargeRow={true} />
            <Row title="International Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Footer />
        </div>
    );
}

export default BrowseByLanguage;