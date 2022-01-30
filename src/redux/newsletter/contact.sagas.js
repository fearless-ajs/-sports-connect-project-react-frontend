import { takeLatest, put, all, call } from 'redux-saga/effects';
import { ContactActionTypes } from "./contact.types";

import {
    contactRegistrationSuccess,
    contactRegistrationFailure,
} from "./contact.actions";
import Auth from "../../backend/Auth";
import Contact from "../../backend/Contact";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* addNewContact({payload: { email, name }}) {
    try {
        // Check User Authentication status
        const contact =  yield Contact.addNewContact(email, name);
        yield put(contactRegistrationSuccess(contact));
       yield notify.fire({
            icon: 'success',
            title: 'Contact added successfully',
            text: 'Please check mail box for confirmation.',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2500
        });
    }catch (error) {
        yield put(contactRegistrationFailure(error.response))
       yield notify.fire({
            icon: 'error',
            title: 'Newsletter Error',
            text: error.data,
            showConfirmButton: true,
        });
    }
}


/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/
export function* onRegisterNewContact() {
    yield takeLatest(ContactActionTypes.CONTACT_REGISTRATION_START, addNewContact)
}


export function* contactSagas() {
    yield all([
        call(onRegisterNewContact),
    ])
}