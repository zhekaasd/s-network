import React, {useEffect} from 'react';
import st from './Weather.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import {weatherAPI} from "./dal/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./reducers/store";
import {setWeather} from "./reducers/weather-reducer";
import {RandomUsers} from "./RandomUsers";

const Weather = () => {


    const weather = useSelector((state: AppStateType) => state.weather);
    const dispatch = useDispatch();



    useEffect(() => {
        weatherAPI.getWeather('Moscow')
            .then((resp => {
                dispatch(setWeather(resp.data.weather[0], resp.data.main, resp.data.wind, resp.data.name));
            }))

    }, []);



    let currentTime = new Date().getHours() + ':' + new Date().getSeconds();


    return (
        <>
            <div className={st.weatherContainer}>
                <div className={st.weatherContent}>
                    <div className={st.locationWeather}>
                        {/*<span>Moscow</span>*/} <span>{weather.name}</span> <span>{currentTime}</span></div>
                    <div className={st.iconWeather}>
                        <LightModeIcon fontSize={'large'} />
                        <p>{weather.weather?.main}</p>
                    </div>
                    <div className={st.temp}>
                        <ul>
                            <span>{weather.main?.humidity}% Влажность</span>
                            <span>{weather.wind?.speed} m/s Ветер</span>
                            <span>{weather.weather?.main} погода</span>
                        </ul>
                        <h1>{Math.floor(weather.main?.temp as number)}°</h1>
                    </div>
                </div>

            </div>

            <RandomUsers />

        </>
    );
};

export default Weather;