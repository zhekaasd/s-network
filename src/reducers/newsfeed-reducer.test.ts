import {addPost, InitialStateTimelineType, newsfeedReducer, updatePostText} from "./newsfeed-reducer";


let startState: InitialStateTimelineType;
beforeEach(() => {
    startState = {
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
});



test('add post should be correct', () => {
    let endState = newsfeedReducer(startState, addPost());

    expect(endState.posts.length).toBe(7);
    expect(endState.posts[0].postText).toBe('');
});


test('update new post text is correct', () => {
    let endState = newsfeedReducer(startState, updatePostText('new post text'));

    expect(endState.actualPostText).toBe('new post text');
})