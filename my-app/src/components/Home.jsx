import React, { useEffect, useState } from "react";
import '../css/Home.css';
import ItemInput from './ItemInput'
import { BsSearch } from 'react-icons/bs';

const Home = ({ countries, selectCountries, ...props }) => {
    const [display, setdisplay] = useState("displayNone");
    const [searchValue, setSearchValue] = useState("");


    const btnInput = function () {
        (display == "display") ? setdisplay("displayNone") : setdisplay("display");
        setSearchValue("");
    }

    const search = function (countries) {
        let filter = countries.filter((countrie) => { return (countrie.name.toUpperCase().includes(searchValue.toUpperCase())) });
        return (filter.map((countrie, index) => {
            return (
                <ItemInput key={index} selectCountries={() => selectCountries(countrie.name)} src={countrie.flag} name={countrie.name} />

            )
        }))
    }
    return (
        <div className={`container-home`}>
            <div className="search-container">
                <input className="input-search" type="text" placeholder="Search.." value={searchValue}
                    onFocus={() => setdisplay("display")} onChange={(e) => setSearchValue(e.target.value)} ></input>
                <button className="btn-search" onClick={btnInput}>
                    <BsSearch/>
                </button>
                <div className={`dropDown ${display}`}>
                    {(searchValue) ? search(countries) :
                        countries.map((countrie, index) => {
                            return (
                             <ItemInput key={index} selectCountries={() => selectCountries(countrie.name)} src={countrie.flag} name={countrie.name} />
                            )
                        })}
                </div>
            </div>

        </div>

    )
}

export default Home;