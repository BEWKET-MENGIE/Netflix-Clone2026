import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
      
        {/* Functional Social Media Links */}
        <div className="footer_icons">
          <a href="https://www.facebook.com/Netflix" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'inherit' }}>
            <FacebookOutlinedIcon style={{ cursor: 'pointer' }} />
          </a>
          <a href="https://www.instagram.com/netflix" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit' }}>
            <InstagramIcon style={{ cursor: 'pointer' }} />
          </a>
          <a href="https://www.youtube.com/netflix" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'inherit' }}>
            <YouTubeIcon style={{ cursor: 'pointer' }} />
          </a>
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>
            Service Code
          </p>
        </div>

        <div className="copy-right">
          <p> &copy; 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;