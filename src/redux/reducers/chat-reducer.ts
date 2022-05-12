
const ADD_MESSAGE = 'ADD-MESSAGE';

type ActionsType = AddMessageType;
export type InitialStateDialogsType = {
    users: Array<UserType>
    messages: Array<MessageType>
}

export type UserType = {
    id: string
    firstName: string
    lastName: string
}

export type MessageType = {
    id: string
    messageText: string
    value: boolean
}

const initialState: InitialStateDialogsType = {
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


export const chatReducer = (state: InitialStateDialogsType = initialState, action: ActionsType): InitialStateDialogsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: new Date().toLocaleString(), messageText: action.value, value: true}],
            }
        }

        default:
            return state;
    }
}



type AddMessageType = {
    type: typeof ADD_MESSAGE
    value: string
}


export const addMessage = (value: string): AddMessageType => {
    return {type: ADD_MESSAGE, value}
}

