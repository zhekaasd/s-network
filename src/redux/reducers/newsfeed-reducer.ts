import {randomNumber} from "../../utils/utils";


const ADD_POST = 'ADD-POST';

type AddPostType = {
    type: typeof ADD_POST
    value: string
}

type ActionsType = AddPostType;

export type InitialStateTimelineType = {
    posts: Array<PostType>
}

export type PostType = {
    id: string
    whoseMessageItIs: boolean
    postText: string
    likesCount: number
    commentsCount: number
}

const initialState: InitialStateTimelineType = {
    posts: [
        {id: '1', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores excepturi fugiat nihil, omnis repudiandae similique voluptatum!', commentsCount: randomNumber(10), likesCount: randomNumber(100)},
        {id: '2', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing?', commentsCount: randomNumber(10), likesCount: randomNumber(100)},
        {id: '3', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: randomNumber(10), likesCount: randomNumber(100)},
        {id: '6', whoseMessageItIs: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: randomNumber(10), likesCount: randomNumber(100)},
        {id: '8', whoseMessageItIs: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: randomNumber(10), likesCount: randomNumber(100)},
        {id: '4', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero molestiae nesciunt odit perferendis placeat quae quo sint tempore totam.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)}
    ],
};


export const newsfeedReducer = (state: InitialStateTimelineType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: new Date().toLocaleString(), postText: action.value, whoseMessageItIs: true, likesCount: 0, commentsCount: 0}, ...state.posts],
            }
        }

        default:
            return state;
    }
}


export const addPost = (value: string): AddPostType => {
    return {type: ADD_POST, value}
}