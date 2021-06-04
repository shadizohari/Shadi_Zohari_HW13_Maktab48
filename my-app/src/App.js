
import React, { useEffect, useState } from "react";
import Home from './components/Home'
import Page from './components/Page'
import Info from './components/Info'
import "./css/App.css"
import "./font-en/font-en.css"
import { ThemeContext, themes } from './components/ThemeContext';


import { BiSun } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';


function App() {
  const [statePage, setStatePage] = useState("home");
  const [countries, setCountries] = useState([]);
  const [stateSelectCountrie, setStateCountrie] = useState({});
  const [stateCapital, setStateCapital] = useState();
  const [stateWeather, setStateWeather] = useState()
  const [themeColor, setThemeColor] = useState(themes.dark)
  const [themeName, setThemeName] = useState("dark")
  const [iconTheme, setIconTheme] = useState(<BiSun />)
  const changeTheme = function () {
    (themeColor == themes.dark) ? setThemeColor(themes.light) : setThemeColor(themes.dark);
    if (themeName == "dark") {
      setIconTheme(<FaMoon />)
      setThemeName("light")
    } else {
      setIconTheme(<BiSun />)
      setThemeName("dark")
    }
  }


  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setCountries(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  const selectCountries = function (x) {
    setStatePage("Info")
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name == x) {
        setStateCountrie(countries[i])
        setStateCapital(countries[i].capital)
      }
    }
  }
  // "api.openweathermap.org/data/2.5/weather?q=tehran&appid=d38da60f9806122a179ad5986e799e05"
  useEffect(() => {
    if (stateCapital) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${stateCapital}&appid=d38da60f9806122a179ad5986e799e05`)
        .then(res => res.json())
        .then(
          (result) => {
            setStateWeather(result);
            console.log(result);

          },
          (error) => {
            console.log(error);
          }
        )
    }
  }, [stateCapital])

  const { name, flag, callingCodes, nativeName, population, subregion, timezones, languages } = stateSelectCountrie;
  return (
    <ThemeContext.Provider value={themeColor}>
      <div>
        <Page back={() => setStatePage("home")} changeTheme={changeTheme} iconTheme={iconTheme}>
          {(statePage == "home") ? <Home countries={countries} selectCountries={selectCountries} /> :
            <Info countrie={name} src={flag}
              callingCode={callingCodes[0]} capital={stateCapital}
              nativeName={nativeName} population={population}
              subregion={subregion} timezonesArr={timezones[0]}
              languagesArr={languages[0].name}
              stateWeather={stateWeather} />}
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
