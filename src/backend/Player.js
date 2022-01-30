import axios from "axios";
import Api from "./Api";

class Player extends Api{

    registerNewPlayer = async (favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink) => {
        return await axios.post(`${this.endPoint()}/players`, {
            favoriteWingNo,
            dateOfBirth,
            nationality,
            city,
            state,
            height,
            club,
            phone,
            linkedInPageLink
        },{ withCredentials: true });
    }

    updatePlayerPrimaryProfile = async (favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink) => {
        return await axios.patch(`${this.endPoint()}/players`, {
            favoriteWingNo,
            dateOfBirth,
            nationality,
            city,
            state,
            height,
            club,
            phone,
            linkedInPageLink
        },{ withCredentials: true });
    }

    fetchPlayerPrimaryProfile = async () => {
        return await axios.get(`${this.endPoint()}/players`,{ withCredentials: true });
    }
}

export default new Player;