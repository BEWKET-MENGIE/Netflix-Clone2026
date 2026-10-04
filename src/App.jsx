import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TVShows from './pages/TVShows/TVShows';
import Movies from './pages/Movies/Movies';
import Latest from './pages/Latest/Latest';
import MyList from './pages/MyList/MyList';
import BrowseByLanguage from './pages/BrowseByLanguage/BrowseByLanguage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tvshows" element={<TVShows />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/latest" element={<Latest />} />
                <Route path="/mylist" element={<MyList />} />
                <Route path="/browse-by-language" element={<BrowseByLanguage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;