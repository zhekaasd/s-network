import {
    InitialStateProfileType,
    profileReducer,
    ProfileUserType,
    ProfileUserWithFakeLocationType, setStatusProfile,
    setUserProfileAC
} from "./profile-reducer";

let startState: InitialStateProfileType;

beforeEach(() => {
    startState = {
        profile: null,
        status: ''
    }
});


test('set user profile should be correct', () => {
    let profileData: ProfileUserWithFakeLocationType = {
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
        },
        locationUser: {
            id: 368,
            title: 'Tailand'
        },
        backgroundBanner: {
            id: 123,
            banner: ''
        }
    }

    let endState = profileReducer(startState, setUserProfileAC(profileData));

    expect(endState.profile?.fullName).toBe('Ivan Ivanich');
    expect(endState.profile?.userId).toBe(333);
})


test('set status profile should be correct', () => {
    const newStatus = 'status is update!';

    let endState = profileReducer(startState, setStatusProfile(newStatus));

    expect(endState.status).toBe('status is update!');
})