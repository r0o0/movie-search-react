import React from 'react';
import './CSS/Footer.scss';
import api from '../Assets/API';

function Footer(setting) {
  // store TMDb homepage url
  const tmdbHomepage = `${api.tmdb}${api.language}${setting.lang}`;

  return (
    <footer className="footer">
      <p className="tmdb-mention">Powered By <a className="tmdb-url" href={tmdbHomepage} target="_blank" rel="noopener noreferrer">TMDb</a></p>
      <small className="copyright">2018 &copy; r0o0</small>
    </footer>
  );
}

export default Footer;