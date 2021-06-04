// import React, { useEffect, useState } from "react";
import '../css/Footer.css';
import images from '../img/downsize.png';
import { ThemeContext } from './ThemeContext';
import React, { useContext } from "react";


const Footer = ({ countries, ...props }) => {

    const value = useContext(ThemeContext);

    return (
        <div className="container-footer" style={{ backgroundColor: value.background, color: value.color }}>
            <img src={images} style={{ width: "250px" }} />
            <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
    )
}

export default Footer;