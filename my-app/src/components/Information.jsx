import '../css/Information.css';
import { ThemeContext } from './ThemeContext';
import React, { useContext } from "react";

const Information = ({ nativeName,capital,population,subregion,timezonesArr,languagesArr, ...props }) => {
    const value = useContext(ThemeContext);
    return (
        <div className="container-infomation" style={{ backgroundColor: value.background, color: value.color }}>
            <div className="flex font-size">
                <p>Native Name:</p>
                <p>{nativeName}</p>
            </div>
            <div className="flex font-size">
                <p>Capital:</p>
                <p>{capital}</p>
            </div>
            <div className="flex font-size">
                <p>Population:</p>
                <p>{population}</p>
            </div>
            <div className="flex font-size">
                <p>Sub Region:</p>
                <p>{subregion}</p>
            </div>
            <div className="flex font-size">
                <p>Sub Region:</p>
                <p>{timezonesArr}</p>
            </div>
            <div className="flex font-size">
                <p>Languages:</p>
                <p>{languagesArr}</p>
            </div>
        </div>
    )
}

export default Information;