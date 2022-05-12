import {addPost, InitialStateTimelineType, newsfeedReducer} from "./newsfeed-reducer";


let startState: InitialStateTimelineType;
beforeEach(() => {
    startState = {
        posts: [
            {id: '1', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores excepturi fugiat nihil, omnis repudiandae similique voluptatum!', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
            {id: '2', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing?', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
            {id: '3', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
            {id: '6', whoseMessageItIs: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
            {id: '8', whoseMessageItIs: false, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)},
            {id: '4', whoseMessageItIs: true, postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti nulla possimus. Atque cum delectus dolores exercitationem, fugit ipsum libero molestiae nesciunt odit perferendis placeat quae quo sint tempore totam.', commentsCount: Math.floor(Math.random() * 10), likesCount: Math.floor(Math.random() * 100)}
        ],
    };
});


test('add post should be correct', () => {
    const value = 'add new post';
    let endState = newsfeedReducer(startState, addPost(value));

    expect(endState.posts.length).toBe(7);
    expect(endState.posts[0].postText).toBe(value);
});