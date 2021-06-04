import '../css/Info.css';
import CallingCode from './CallingCode';
import Infomation from './Information';
import Weather from './Weather';
import { WeatherContext } from './WeatherContext';

const Info = ({ src, callingCode, nativeName, capital, population, subregion, timezonesArr, languagesArr,stateWeather, ...props }) => {
    return (
        <div className="container-info">
            <img className="flag" src={src} />
            <div className="callingCode">
                <CallingCode callingCode={callingCode} />
            </div>
            <div className="information">
                <Infomation capital={capital} nativeName={nativeName} population={population} subregion={subregion}
                    timezonesArr={timezonesArr} languagesArr={languagesArr} />
            </div>

            {(stateWeather) ?
                <div className="weather">
                    <WeatherContext.Provider value={stateWeather}>
                        <Weather unit="metric" />
                    </WeatherContext.Provider>
                </div>
                : false}

        </div>
    )
}

export default Info;