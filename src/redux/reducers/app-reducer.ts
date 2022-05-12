import {authUserProfile} from "./auth-reducer";

const AUTHORIZATION_CONFIRMATION = 'AUTHORIZATION-CONFIRMATION';

type InitialStateAppType = {
    authorized: boolean
}

type ActionsType = AuthorizationConfirmationType;

const initialState: InitialStateAppType = {
    authorized: false
}

export const appReducer = (state: InitialStateAppType = initialState, action: ActionsType): InitialStateAppType => {
    switch (action.type) {

        case AUTHORIZATION_CONFIRMATION: {
            return {
                ...state,
                authorized: true
            }
        }

        default:
            return state;
    }
};

type AuthorizationConfirmationType = {
    type: typeof AUTHORIZATION_CONFIRMATION
}
export const authorizationConfirmationAC = (): AuthorizationConfirmationType => ({
    type: AUTHORIZATION_CONFIRMATION
})


export const authorizationConfirmation = () => (dispatch: any) => {
    Promise.all([dispatch(authUserProfile())])
        .then(() => {
            dispatch(authorizationConfirmationAC());
        })
}