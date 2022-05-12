import {addMessage, chatReducer, InitialStateDialogsType} from "./chat-reducer";

let startState: InitialStateDialogsType;

beforeEach(() => {
    startState = {
        users: [
            {id: '1', firstName: 'Ivan', lastName: 'Ivanov'},
            {id: '2', firstName: 'Petr', lastName: 'Petrov'},
            {id: '3', firstName: 'Alex', lastName: 'Alexeev'},
            {id: '4', firstName: 'Maks', lastName: 'Maksimov'},
            {id: '5', firstName: 'Fedor', lastName: 'Fedorov'},
        ],
        messages: [
            {id: '11', value: false, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero'},
            {id: '12', value: false, messageText: ' Atque cum delectus dolores exercitationem, fugit ipsum libero'},
            {id: '13', value: true, messageText: 'Lorem ipsum dolor sit amet, consectetur libero'},
            {id: '14', value: false, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero'},
            {id: '15', value: true, messageText: 'dolores exercitationem, fugit ipsum libero'},
            {id: '16', value: false, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus.'},
        ]
    };
})

test('add message should be correct', () => {

    const value = 'add message';
    let endState = chatReducer(startState, addMessage(value));

    expect(endState.messages.length).toBe(7);
    expect(endState.messages[endState.messages.length - 1].messageText).toBe(value);
})