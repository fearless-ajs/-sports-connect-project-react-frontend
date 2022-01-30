import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/userReducer";
import settingReducer from "./setting/settingReducer";
import contactReducer from "./newsletter/contactReducer";
import playerReducer from "./player/playerReducer";
import postReducer from "./post/postReducer";
import coachReducer from "./coach/coachReducer";
import routingReducer from "./routing/routingReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['routing']
}

const rootReducer = combineReducers({
    user: userReducer,
    setting: settingReducer,
    routing: routingReducer,
    contact: contactReducer,
    player: playerReducer,
    post: postReducer,
    coach: coachReducer
});

export default persistReducer(persistConfig, rootReducer);