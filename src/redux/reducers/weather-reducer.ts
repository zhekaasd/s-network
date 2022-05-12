import {Dispatch} from "redux";
import {weatherAPI} from "../dal/api";

type TempType = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
};

type WindType = {
    speed: number,
    deg: number,
    gust: number
};

type WeatherType = {id: number, main: string, description: string ,icon: string};


export type InitialStateWeatherType = {
    weather: WeatherType | null
    main: TempType | null,
    wind: WindType | null,
    name: string | null
}

const initialState: InitialStateWeatherType = {
    weather: null,
    wind: null,
    main: null,
    name: null
}

export const weatherReducer = (state: InitialStateWeatherType = initialState, action: setWeatherType): InitialStateWeatherType => {
    switch (action.type) {
        case "SET-W": {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state;
    }
}

type setWeatherType = ReturnType<typeof setWeather>;
export const setWeather = (weather: WeatherType, main: TempType, wind: WindType, name: string) => {
    return {type: 'SET-W', data: {weather, wind, main, name}}
}


export const changeWeatherCity = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.getWeather(city)
        .then((response) => {
            debugger
            if (response.status === 200) {
                let weather = response.data.weather[0];
                let {main, name, wind} = response.data;
                dispatch(setWeather(weather, main, wind, name));
            }
        }).catch((err) => { debugger
             throw new Error('Uncorrected name of city');
    })
}