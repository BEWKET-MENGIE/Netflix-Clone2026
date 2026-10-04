import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Banner from '../../component/Banner/Banner';
import RowList from '../../component/Rows/RowList/RowList'; // or your individual rows

function Home() {
    return (
        <div className="home" style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Header />
            <Banner />
            <RowList />
            <Footer />
        </div>
    );
}

export default Home;