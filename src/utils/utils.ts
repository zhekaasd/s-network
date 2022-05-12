import {backgroundBanner, usersWithFakeLocation} from "./fakeLocationData";

/*--- get random 5 elements of array ---*/
export function getRandomUsers(array: Array<any>) {
    let newArr: Array<any> = [];

    while (newArr.length < 5) {
        let num = randomNumber(array.length);

        array = array.filter( (el, index) => {
            if(index !== num) {
                return el;
            } else {
                newArr.push(el);
            }
        });
    }

    return newArr;
}


/*--- random number from 0 to 4 ---*/
export function randomNumber(max: number) {

    return Math.floor(Math.random() * max);
}

/*--- get random location city ---*/
export const getRandomLocationCity = () => {

    const randomCountryNumber: number = randomNumber(5);
    const randomCityNumber: number = randomNumber(5);

    return usersWithFakeLocation.find(el => el.id === randomCountryNumber)?.cities.find( city => city.id === randomCityNumber);
}


/*--- get random background banner ---*/
export const getRandomBackgroundBanner = () => {

    const randomBgNumber: number = randomNumber(30);

    return backgroundBanner.find(el => el.id === randomBgNumber);
}