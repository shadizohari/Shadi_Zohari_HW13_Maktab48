import React, { useContext } from "react";
import '../css/Menu.css';
import images from '../img/downsize.png';
import { BiArrowBack } from 'react-icons/bi';
import { ThemeContext } from './ThemeContext';


const Menu = ({ back,changeTheme,iconTheme, ...props }) => {

    const value = useContext(ThemeContext);


    return (
        <div className="container-menu" style={{ backgroundColor: value.background, color: value.color }}>
            <div className="container">
                <ul>
                    <li className="light" onClick={changeTheme}>{iconTheme}</li>
                </ul>
                <ul>
                    <li><BiArrowBack onClick={back} /></li>
                    <li>
                        <img src={images} style={{ width: "100px" }} />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Menu;