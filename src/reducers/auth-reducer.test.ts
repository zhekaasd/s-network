import {authReducer, authUserProfileAC, InitialAuthStateType} from "./auth-reducer";


test('authorized should be correct', () => {
    const startState: InitialAuthStateType = {
        login: null,
        id: null,
        email: null,
        isAuth: false
    };

    const endState = authReducer(startState, authUserProfileAC('user', 1, 'user@gmail.com'));

    expect(endState.login).toBe('user');
    expect(endState.isAuth).toBe(true);
})