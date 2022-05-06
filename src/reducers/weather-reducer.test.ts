import {InitialStateWeatherType, setWeather, weatherReducer} from "./weather-reducer";

let startState: InitialStateWeatherType;

beforeEach(() => {
    startState = {
        weather: null,
        wind: null,
        main: null,
        name: null
    }
});

test('set data of weather is correct', () => {

    let data = {
        weather: {"id":800,"main":"Clear","description":"ясно","icon":"01d"},
        main: {"temp":9.95,"feels_like":6.93,"temp_min":9.95,"temp_max":9.95,"pressure":1021,"humidity":42,"sea_level":1021,"grnd_level":1004},
        wind: {"speed":6.82,"deg":7,"gust":8.1},
        name: "Moscow"
    };

    let endState = weatherReducer(startState, setWeather(data.weather, data.main, data.wind, data.name));

    expect(endState.name).toBe('Moscow');
    expect(endState.weather?.main).toBe('Clear');
    expect(endState.wind?.speed).toBe(6.82);
})