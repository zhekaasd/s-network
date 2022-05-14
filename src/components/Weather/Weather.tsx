import React, {ChangeEvent, useEffect, useState} from 'react';
import {weatherAPI} from "../../dal/api";
import {useDispatch, useSelector} from "react-redux";
import SettingsIcon from '@mui/icons-material/Settings';
import {changeWeatherCity, setWeather} from '../../redux/reducers/weather-reducer';
import { AppStateType } from '../../redux/store/store';

/*--- import styles ---*/
import st from './Weather.module.scss';
import SpeedIcon from '@mui/icons-material/Speed';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import LightModeIcon from '@mui/icons-material/LightMode';

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

/*--- Time settings ---*/
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    let currentTime = hours + ':' + (minutes < 10 && minutes > 0 ?  '0' + minutes : minutes);


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

                        <span className={st.currentTime}>
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


                        <h3>{weather.weather?.description}</h3>
                    </div>
                    <div className={st.temp}>
                        <ul>
                            <span> <OpacityIcon fontSize={'small'}/> {weather.main?.humidity}% </span>
                            <span> <AirIcon/> {weather.wind?.speed} m/s</span>
                            <span> <SpeedIcon/> {weather.main?.pressure}</span>
                        </ul>
                        <h1>{Math.floor(weather.main?.temp as number)}°</h1>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Weather;