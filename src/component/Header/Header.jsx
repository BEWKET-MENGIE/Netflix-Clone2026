import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import netflixLogo from '../../assets/image/netflix-logo.png';
import './Header.css';

const Header = () => {
    const [show, handleShow] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const searchRef = useRef(null);
    const notifRef = useRef(null);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    // Handle background color change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setIsNotifOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            alert(`Searching database for: "${searchQuery}"`);
        }
    };

    return (
        <div className={`header_outer_container ${show && "nav_black"}`}>
            <div className="header_container">
                <div className="header_left">
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={netflixLogo} alt="netflix logo" />
                            </Link>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tvshows">TVShows</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/latest">Latest</Link></li>
                        <li><Link to="/mylist">MyList</Link></li>
                        <li><Link to="/browse-by-language">Browse by Language</Link></li>
                    </ul>
                </div>

                <div className="header_right">
                    <ul>
                        {/* 1. Functional Search Component */}
                        <li ref={searchRef} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            {isSearchOpen && (
                                <input
                                    type="text"
                                    placeholder="Titles, people, genres..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearchSubmit}
                                    autoFocus
                                    style={{
                                        backgroundColor: 'rgba(0,0,0,0.85)',
                                        border: '1px solid #fff',
                                        color: '#fff',
                                        padding: '6px 12px',
                                        borderRadius: '4px',
                                        outline: 'none',
                                        marginRight: '8px',
                                        fontSize: '0.9rem',
                                        width: '200px'
                                    }}
                                />
                            )}
                            <SearchIcon 
                                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                                style={{ cursor: "pointer" }} 
                            />
                        </li>

                        {/* 2. Functional Notifications Menu */}
                        <li ref={notifRef} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <NotificationsNoneIcon 
                                onClick={() => setIsNotifOpen(!isNotifOpen)} 
                                style={{ cursor: "pointer" }} 
                            />
                            {isNotifOpen && (
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '40px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                                    border: '1px solid #333',
                                    borderRadius: '4px',
                                    width: '260px',
                                    padding: '12px',
                                    zIndex: 100,
                                    boxShadow: '0px 4px 12px rgba(0,0,0,0.5)'
                                }}>
                                    <p style={{ fontSize: '0.8rem', color: '#aaa', borderBottom: '1px solid #333', paddingBottom: '6px', marginBottom: '8px' }}>Notifications</p>
                                    <p style={{ fontSize: '0.85rem', padding: '6px 0', borderBottom: '1px solid #222' }}>New Episode Available: Stranger Things</p>
                                    <p style={{ fontSize: '0.85rem', padding: '6px 0' }}>Top Pick added to your recommendations.</p>
                                </div>
                            )}
                        </li>

                        {/* 3. Functional Profile & Settings Dropdown */}
                        <li ref={profileRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                            <AccountBoxIcon />
                            <ArrowDropDownIcon />
                            {isProfileOpen && (
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '40px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                                    border: '1px solid #333',
                                    borderRadius: '4px',
                                    width: '150px',
                                    padding: '8px 0',
                                    zIndex: 100,
                                    textAlign: 'center',
                                    boxShadow: '0px 4px 12px rgba(0,0,0,0.5)'
                                }}>
                                    <p style={{ fontSize: '0.9rem', padding: '8px 0', borderBottom: '1px solid #333', cursor: 'pointer' }}>Account</p>
                                    <p style={{ fontSize: '0.9rem', padding: '8px 0', cursor: 'pointer', color: '#e50914' }} onClick={() => alert("Logged out successfully!")}>Sign out</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;