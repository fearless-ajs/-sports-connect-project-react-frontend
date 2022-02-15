import { BookingActionTypes } from "./booking.types";

// Takes receiverId as a whole Object
export const bookTalentStart = receiverId => ({
   type: BookingActionTypes.BOOK_TALENT_START,
   payload: receiverId
});

export const bookTalentSuccess = () => ({
   type: BookingActionTypes.BOOK_TALENT_SUCCESS
});

export const bookTalentFailure = error => ({
   type: BookingActionTypes.BOOK_TALENT_FAILURE,
   payload: error
});

