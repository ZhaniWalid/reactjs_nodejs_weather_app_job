import React from 'react';
import { FaHeartbeat, FaLinkedin, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import './App.css';

const App = ({ children }) => (
  <main>
    {children}
    <footer className="AppFooter">
        Made in <FaHeartbeat /> with Walid ZHANI - &nbsp;
        <a href="https://www.linkedin.com/in/walid-zhani-54705612a/"
           rel="noreferrer" 
           target="_blank"
           style={{ 'color': 'inherit' }}
        > 
          <FaLinkedin /> 
        </a>
        &nbsp;&nbsp;
        <a href="https://twitter.com/walidzhani"
           rel="noreferrer" 
           target="_blank"
           style={{ 'color': 'inherit' }}
        > 
          <FaTwitter /> 
        </a>
        &nbsp;&nbsp;
        <a href="https://www.facebook.com/edzio.auditore1"
           rel="noreferrer" 
           target="_blank"
           style={{ 'color': 'inherit' }}
        > 
          <FaFacebookSquare /> 
        </a>
    </footer>
  </main>
);

export default App;