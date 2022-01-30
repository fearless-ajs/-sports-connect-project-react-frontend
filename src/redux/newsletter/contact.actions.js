import { ContactActionTypes } from "./contact.types";


export const contactRegistrationSuccess = contact => ({
   type: ContactActionTypes.CONTACT_REGISTRATION_SUCCESS,
   payload: contact
});

export const contactRegistrationFailure = error => ({
   type: ContactActionTypes.CONTACT_REGISTRATION_FAILURE,
   payload: error
});

export const contactRegistrationStart = emailAndName => ({
   type: ContactActionTypes.CONTACT_REGISTRATION_START,
   payload: emailAndName
});

