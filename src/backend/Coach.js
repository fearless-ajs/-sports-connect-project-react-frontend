import axios from "axios";
import Api from "./Api";

class Coach extends Api{

    registerNewCoach = async (dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink) => {
        return await axios.post(`${this.endPoint()}/agents`, {
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

    updateCoachPrimaryProfile = async (dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink) => {
        return await axios.patch(`${this.endPoint()}/agents`, {
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

    fetchCoachPrimaryProfile = async () => {
        return await axios.get(`${this.endPoint()}/agents`,{ withCredentials: true });
    }

}

export default new Coach;