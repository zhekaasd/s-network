
export type StoreType = {
    _state: StateType
    getState: () => StateType
    addPost: () => void
    updatePostText: (value: string) => void
    addMessage: () => void
    updateMessageText:(value: string) => void
    subscribe: (a: any) => void
    _callSubscribe: (store: StoreType) => void
}

type StateType = {
    messagesPage: {
        users: Array<UserType>
        messages: Array<MessageType>
        actualMessageText: string
    }
    profilePage: {
        posts: Array<PostType>,
        actualPostText: string
    }
}

type UserType = {
    id: string
    firstName: string
    lastName: string
}

type MessageType = {
    id: string
    messageText: string
    value: boolean
}

type PostType = {
    id: string
    value: boolean
    postText: string
    likesCount: number
    commentsCount: number
}

let store: StoreType = {
    _state: {
        messagesPage: {
            users: [
                {id: '1', firstName: 'Ivan', lastName: 'Ivanov'},
                {id: '2', firstName: 'Petr', lastName: 'Petrov'},
                {id: '3', firstName: 'Alex', lastName: 'Alexeev'},
                {id: '4', firstName: 'Maks', lastName: 'Maksimov'},
                {id: '5', firstName: 'Fedor', lastName: 'Fedorov'},
            ],
            messages: [
                {id: '66', value: true, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero'},
                {id: '66', value: true, messageText: ' Atque cum delectus dolores exercitationem, fugit ipsum libero'},
                {id: '66', value: false, messageText: 'Lorem ipsum dolor sit amet, consectetur libero'},
                {id: '66', value: true, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero'},
                {id: '66', value: false, messageText: 'dolores exercitationem, fugit ipsum libero'},
                {id: '66', value: true, messageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus.'},
            ],
            actualMessageText: ''

        },
        profilePage: {
            posts: [
                {id: '1', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores excepturi fugiat nihil, omnis repudiandae similique voluptatum!', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
                {id: '2', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing?', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
                {id: '3', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
                {id: '6', value: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
                {id: '8', value: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
                {id: '4', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero molestiae nesciunt odit perferendis placeat quae quo sint tempore totam.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)}
            ],
            actualPostText: ''
        },
    },
    getState() {
        return this._state;
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().toLocaleDateString(),
            postText: this._state.profilePage.actualPostText,
            value: true,
            likesCount: 0,
            commentsCount: 0
        }
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.actualPostText = '';
        this._callSubscribe(this);
    },
    updatePostText(value) {
        this._state.profilePage.actualPostText = value;
        this._callSubscribe(this);
    },
    addMessage() {
        this._state.messagesPage.messages.unshift({id: new Date().toLocaleString(), messageText: this._state.messagesPage.actualMessageText, value: true});
        this._callSubscribe(this);
    },

    updateMessageText(value) {
        this._state.messagesPage.actualMessageText = value;
        this._callSubscribe(this);
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    _callSubscribe(store) {
    }
}
