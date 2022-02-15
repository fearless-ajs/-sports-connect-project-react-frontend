import { BookingActionTypes } from "./booking.types";

const INITIAL_STATE = {
    currentUserBooking: null,
    isFetching: false,
    isLoading: false,
    bookingError: null
};

const bookingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookingActionTypes.BOOK_TALENT_START:
            return {
                ...state,
                isLoading: true,
            }
        case BookingActionTypes.BOOK_TALENT_SUCCESS:
            return {
                ...state,
                isLoading:  false,
                bookingError: null
            }
        case BookingActionTypes.BOOK_TALENT_FAILURE:
            return {
                ...state,
                bookingError: action.payload,
                isLoading: false,
                isFetching: false
            }
        default:
            return state;
    }
};

export default bookingReducer;