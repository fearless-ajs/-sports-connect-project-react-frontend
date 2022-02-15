import { takeLatest, put, all, call } from 'redux-saga/effects';
import { BookingActionTypes } from "./booking.types";

import { bookTalentSuccess, bookTalentFailure } from "./booking.actions";
import Booking from "../../backend/Booking";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* createNewBooking({payload: { receiverId }}) {
    try{
        const booking = yield Booking.createTalentBooking(receiverId);
        // yield put(bookTalentSuccess(booking.data));
        notify.fire({
            icon: 'success',
            title: 'Talent booked!',
            text: `A notification has been sent to the talent's email email `,
            showCancelButton: false,
            confirmButtonColor: '#00a01e',
            confirmButtonText: 'Ok',
        });
    }catch(error) {
        const {  message } = error.response.data;
        notify.fire({
            icon: 'error',
            title: 'Talent failure',
            text: message,
            showConfirmButton: true,
            confirmButtonColor: '#00a01e',
        });
        yield put(bookTalentFailure(error.response))
    }
}



/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/

export function* onBookNewTalentStart() {
    yield takeLatest(BookingActionTypes.BOOK_TALENT_START, createNewBooking)
}

export function* bookingSagas() {
    yield all([
        call(onBookNewTalentStart)
    ])
}