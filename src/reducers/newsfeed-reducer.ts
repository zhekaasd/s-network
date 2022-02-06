
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


type UpdatePostText = {
    type: typeof UPDATE_POST_TEXT
    value: string
}

type AddPostType = {
    type: typeof ADD_POST
}

type ActionsType = AddPostType | UpdatePostText;

type InitialStateTimelineType = {
    posts: Array<PostType>,
    actualPostText: string
}

export type PostType = {
    id: string
    value: boolean
    postText: string
    likesCount: number
    commentsCount: number
}

const initialState: InitialStateTimelineType = {
    posts: [
        {id: '1', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores excepturi fugiat nihil, omnis repudiandae similique voluptatum!', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
        {id: '2', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing?', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
        {id: '3', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
        {id: '6', value: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
        {id: '8', value: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
        {id: '4', value: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero molestiae nesciunt odit perferendis placeat quae quo sint tempore totam.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)}
    ],
        actualPostText: ''
};


export const newsfeedReducer = (state: InitialStateTimelineType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: new Date().toLocaleString(), postText: state.actualPostText, value: true, likesCount: 0, commentsCount: 0}, ...state.posts],
                actualPostText: ''
            }
        }

        case UPDATE_POST_TEXT: {
            return {...state, actualPostText: action.value};
        }

        default:
            return state;
    }
}



export const addPost = (): AddPostType => {
    return {type: ADD_POST}
}

export const updatePostText = (value: string): UpdatePostText => {
    return {type: UPDATE_POST_TEXT, value}
}