import React from 'react';
import './CSS/Footer.scss';
import api from '../Assets/API';

function Footer(setting) {
  // store TMDb homepage url
  const tmdbHomepage = `${api.tmdb}${api.language}${setting.lang}`;

  return (
    <footer>
      <small>&copy; r0o0</small>
        <p>Powered By <a href={tmdbHomepage} target="_blank" rel="noopener noreferrer">TMDb</a></p>
    </footer>
  );
}

export default Footer;