// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const wrapLetters = (word) => word.split('').map((char, index) => <span key={index}>{char}</span>);

  useEffect(() => {
    const buttons = document.querySelectorAll('.nav-button');
    let currentButton = 0;
    let currentLetter = 0;

    const highlightLetter = () => {
      const letters = buttons[currentButton].querySelectorAll('span');
      letters[currentLetter].classList.add('highlight');

      setTimeout(() => {
        letters[currentLetter].classList.remove('highlight');
        currentLetter = (currentLetter + 1) % letters.length;

        if (currentLetter === 0) {
          currentButton = (currentButton + 1) % buttons.length;
        }
      }, 500);
    };

    const intervalId = setInterval(highlightLetter, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" className="nav-button">{wrapLetters('Home')}</NavLink>
        <NavLink to="/projetos" className="nav-button">{wrapLetters('Projetos')}</NavLink>
        <NavLink to="/certificados" className="nav-button">{wrapLetters('Certificados')}</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;