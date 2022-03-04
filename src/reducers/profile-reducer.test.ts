import {InitialStateProfileType, profileReducer, ProfileUserType, setUserProfileAC} from "./profile-reducer";

let startState: InitialStateProfileType;

beforeEach(() => {
    startState = {
        profile: null
    }
});


test('set user profile should be correct', () => {
    let profileData: ProfileUserType = {
        aboutMe: 'about me',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'Ivan Ivanich',
        userId: 333,
        photos: {
            small: '',
            large: ''
        }
    }

    let endState = profileReducer(startState, setUserProfileAC(profileData));

    expect(endState.profile?.fullName).toBe('Ivan Ivanich');
    expect(endState.profile?.userId).toBe(333);
})