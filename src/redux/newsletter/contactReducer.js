import { ContactActionTypes } from "./contact.types";

const INITIAL_STATE = {
    currentContact: null,
    isLoading: false,
    contactError: null,
};

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ContactActionTypes.CONTACT_REGISTRATION_START:
            return {
                ...state,
                contactError: null,
                isLoading: true,
            }
        case ContactActionTypes.CONTACT_REGISTRATION_SUCCESS:
            return {
                ...state,
                currentContact: action.payload,
                contactError: null,
                isLoading: false,
            }
        case ContactActionTypes.CONTACT_REGISTRATION_FAILURE:
            return {
                ...state,
                contactError: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default contactReducer;