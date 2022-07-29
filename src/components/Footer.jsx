
import React from 'react';
import '../styles/components/footer.sass';
import fateLogo from '../assets/fateLogo.png'

function Footer() {
  return (
    <footer className='footContainer'>
      <img
        src={fateLogo}
        alt='logo of Fate Grand Order'
        className='footImage'
      />
      <p className='fooText'>
        Made by Lilith Gouveia, a fan of the franchise, this is a non-profit project, powered by the api
        of the amazing AtlasAcademy.
      </p>
      <br />
    </footer>
  );
}

export default Footer;
