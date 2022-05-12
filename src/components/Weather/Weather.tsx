import React, {ChangeEvent, useEffect, useState} from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import {weatherAPI} from "../../dal/api";
import {useDispatch, useSelector} from "react-redux";
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';
import {changeWeatherCity, setWeather} from '../../redux/reducers/weather-reducer';
import { AppStateType } from '../../redux/store/store';

/*--- import styles ---*/
import st from './Weather.module.scss';

const Weather = () => {


    const weather = useSelector((state: AppStateType) => state.weather);
    const dispatch = useDispatch();

    const [changeMode, setChangeMode] = useState<boolean>(false);
    const [city, setCity] = useState<string>(weather.name ? weather.name : 'Moscow');


    useEffect(() => {
        weatherAPI.getWeather(city)
            .then((resp => {
                dispatch(setWeather(resp.data.weather[0], resp.data.main, resp.data.wind, resp.data.name));
            }))

    }, []);

    const onBlurHandler = () => {
        dispatch(changeWeatherCity(city));
        setChangeMode(false);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }


    let currentTime = new Date().getHours() + ':' + new Date().getMinutes();


    return (
        <>
            <div className={st.weatherContainer}>
                <div className={st.weatherContent}>
                    <div className={st.locationWeather}>

                        <div className={st.locationWeatherCityTitle}>
                            <span >{!changeMode ? weather.name
                                : <input autoFocus onBlur={onBlurHandler} onChange={onChangeHandler} type="text"
                                         value={city}/>}</span>
                            <SettingsIcon onClick={() => setChangeMode(true)} fontSize={'small'} />
                        </div>

                        <span>
                            {currentTime}
                        </span>
                    </div>
                    <div className={st.iconWeather}>

                        {
                            weather.weather?.main === 'Thunderstorm' || weather.weather?.main === 'Drizzle' || weather.weather?.main === 'Rain' ?
                                <ThunderstormIcon fontSize={'large'}/>
                                : weather.weather?.main === 'Snow' ? <AcUnitIcon fontSize={'large'}/>
                                    : weather.weather?.main === 'Clear' ? <LightModeIcon fontSize={'large'}/>
                                        : <CloudIcon fontSize={'large'}/>

                        }


                        <p>{weather.weather?.main}</p>
                    </div>
                    <div className={st.temp}>
                        <ul>
                            <span> <OpacityIcon fontSize={'small'}/> {weather.main?.humidity}% </span>
                            <span> <AirIcon/> {weather.wind?.speed} m/s</span>
                            <span> <BeachAccessIcon/> {weather.weather?.description}</span>
                        </ul>
                        <h1>{Math.floor(weather.main?.temp as number)}°</h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Weather;