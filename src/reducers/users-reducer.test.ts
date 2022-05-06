import {
    changeCurrentPage,
    followingToggle,
    InitialStateUsersType,
    setTotalUsers,
    setUsers, toggleIsFetching, toggleIsFollowingInProgress,
    User,
    usersReducer, UserWithFakeLocation
} from "./users-reducer";


let startState: InitialStateUsersType;

beforeEach(() => {
   startState = {
       users: [
           {id: 11, followed: false, name: 'Chel', photos: {small: '', large: ''}, status: 'Status text Chel', uniqueUrlName: '', locationUser: {id: 1, title: 'Moscow'}, backgroundBanner: {banner: '', id: 3123}},
           {id: 12, followed: false, name: 'Fedor', photos: {small: '', large: ''}, status: 'Status text Fedor', uniqueUrlName: '', locationUser: {id: 2, title: 'Ufa'}, backgroundBanner: {banner: '', id: 2123}},
           {id: 13, followed: false, name: 'Roman', photos: {small: '', large: ''}, status: 'Status text Roman', uniqueUrlName: '', locationUser: {id: 3, title: 'Minsk'}, backgroundBanner: {banner: '', id: 1123}},
       ],
       currentPage: 1,
       totalUsersCount: 0,
       pageSize: 20,
       isFetching: false,
       followingInProgress: []
   }
});


test('set users should be correct', () => {
    let users: Array<UserWithFakeLocation> = [
        {id: 1, followed: false, name: 'Alex', photos: {small: '', large: ''}, status: 'Status text Alex', uniqueUrlName: '', locationUser: {id: 1, title: 'Moscow'}, backgroundBanner: {banner: '', id: 123}},
        {id: 2, followed: false, name: 'Ivan', photos: {small: '', large: ''}, status: 'Status text Ivan', uniqueUrlName: '', locationUser: {id: 2, title: 'Ufa'}, backgroundBanner: {banner: '', id: 143}},
        {id: 3, followed: false, name: 'Sasha', photos: {small: '', large: ''}, status: 'Status text Sasha', uniqueUrlName: '', locationUser: {id: 3, title: 'Minsk'}, backgroundBanner: {banner: '', id: 153}},
    ];

    let endState = usersReducer(startState, setUsers(users));

    expect(endState.users.length).toBe(3);
    expect(endState.users[0].name).toBe('Alex');
})


test('following is toggle should be correct', () => {
    let endState = usersReducer(startState, followingToggle(13));

    expect(endState.users[2].followed).toBe(true);
    expect(endState.users[2].name).toBe('Roman');
})


test('set total users should be correct', () => {
    let endState = usersReducer(startState, setTotalUsers(33));

    expect(endState.totalUsersCount).toBe(33);
})


test('change current page number on users page should be correct', () => {
    let endState = usersReducer(startState, changeCurrentPage(3));

    expect(endState.currentPage).toBe(3);
})



test('toggle is fetching should be correct', () => {
    let endState = usersReducer(startState, toggleIsFetching(true));

    expect(endState.isFetching).toBe(true);
})


test('add user id in array when following in progress', () => {
    let endState = usersReducer(startState, toggleIsFollowingInProgress(true, 13));

    expect(endState.followingInProgress.length).toBe(1);
    expect(endState.followingInProgress[0]).toBe(13);
})


test('remove user id from array after following progress', () => {
    let endState = usersReducer(startState, toggleIsFollowingInProgress(false, 13));

    expect(endState.followingInProgress.length).toBe(0);
})