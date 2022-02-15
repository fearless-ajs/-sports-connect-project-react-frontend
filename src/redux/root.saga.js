import { all, call } from 'redux-saga/effects';
import { userSagas } from "./user/user.sagas";
import { settingSagas } from "./setting/setting.sagas";
import { contactSagas } from "./newsletter/contact.sagas";
import { playerSagas } from "./player/player.sagas";
import { postSagas } from "./post/post.sagas";
import {coachSagas} from "./coach/coach.sagas";
import { bookingSagas } from "./booking/booking.sagas";


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(settingSagas),
        call(contactSagas),
        call(playerSagas),
        call(postSagas),
        call(coachSagas),
        call(bookingSagas)
    ])
}