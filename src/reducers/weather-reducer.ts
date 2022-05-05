


const initialState = {
    weather: null,
    wind: null,
    main: null,
    name: null
}

export const weatherReducer = (state: any = initialState, action: setWeatherType) => {
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
export const setWeather = (weather: Array<any>, main: any, wind: any, name: string) => {
    return {type: 'SET-W', data: {weather, wind, main, name}}
}