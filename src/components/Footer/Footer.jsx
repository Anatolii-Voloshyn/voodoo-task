import React from 'react';
import { useMediaQuery } from "react-responsive"

export const Footer = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className={`flex ${isSmallScreen ? 'flex-col' : 'justify-between'} px-12 md:px-56 py-12 md:py-[84px] text-sm font-bold uppercase border-t border-black bg-white`}>
      {!isSmallScreen && (
        <div className="footer-column">
          <img className="w-20 mt-2" src={require('../../logo.png')} alt="VooDoo-logo"/>
        </div>
      )}
      <div className="footer-column">
        <ul className="space-y-2">
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Returns</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <div className="mt-12 md:mt-0 footer-column">
        <ul className="space-y-2">
          <li><a href="/">Terms & Conditions</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Cookie Policy</a></li>
          <li><a href="/">Cookie Settings</a></li>
        </ul>
      </div>
      <div className="mt-12 md:mt-0  footer-column">
        <ul className="space-y-2">
          <li><a href="/">About Second Chance</a></li>
          <li><a href="/">Career</a></li>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
      </div>

      {isSmallScreen && (
        <div className="flex justify-center my-14 ">
          <img className="w-20 mt-2" src={require('../../logo.png')} alt="VooDoo-logo"/>
        </div>
      )}
    </footer>
  );
};
