import React, {useEffect, useState} from 'react';
import st from './Weather.module.scss';

import AirIcon from '@mui/icons-material/Air';
import StormIcon from '@mui/icons-material/Storm';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import LightModeIcon from '@mui/icons-material/LightMode';
import {usersAPI, weatherAPI} from "./dal/api";
import {getRandomUsers, randomNumber} from "./fakeLocation/fakeLocation";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./reducers/store";
import {getUsers, setUsers} from "./reducers/users-reducer";
import axios from "axios";
import {setWeather} from "./reducers/weather-reducer";

const Weather = () => {


    const pageSize = randomNumber(100);
    const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
    const cityName = useSelector((state: AppStateType) => state.weather.name);
    const dispatch = useDispatch();

    const usersRandom = useSelector((state: AppStateType) => state.usersPage.users);



    useEffect(() => {
        // axios.get('https://api.openweathermap.org/data/2.5/weather?q=Balashov&lang=ru&appid=17aace2073b8f40a5f7204cd838a2ae4&units=metric')
        //     .then((resp) => {
        //         debugger
        //     })

        weatherAPI.getWeather('Ufa')
            .then((resp => {
                dispatch(setWeather(resp.data.weather[0], resp.data.main, resp.data.wind, resp.data.name));
            }))

    }, []);



    useEffect(() => {
        usersAPI.getUsers(currentPage, 100)
            .then((resp) => {
                usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ), 100)
                    .then((resp) => { debugger
                        if(resp.data.items.length < 5) {
                            usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ) - 1, 100)
                                .then(resp => {
                                    let randomUsers = getRandomUsers(resp.data.items);

                                    dispatch(setUsers(randomUsers));
                                })
                        } else {
                            let randomUsers = getRandomUsers(resp.data.items);
                            dispatch(setUsers(randomUsers));
                        }
                    })
            })
    }, []);


    return (
        <>
            <div className={st.weatherContainer}>
                <div className={st.weatherContent}>
                    <div className={st.locationWeather}>
                        {/*<span>Moscow</span>*/} <span>{cityName}</span> <span>16:22</span></div>
                    <div className={st.iconWeather}>
                        <LightModeIcon fontSize={'large'} />
                        <p>rain</p>
                    </div>
                    <div className={st.temp}>
                        <ul>
                            <span>1 text</span>
                            <span>2 text</span>
                            <span>3 text</span>
                        </ul>
                        <h1>8°</h1>
                    </div>
                </div>

            </div>

            <div style={{width: '300px', border: '3px solid white'}}>
                {
                    usersRandom.map( el => <p>{el.name}</p>)
                }
            </div>
        </>
    );
};

export default Weather;