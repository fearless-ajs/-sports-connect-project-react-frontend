import axios from "axios";
import Api from "./Api";

class Booking extends Api{


    createTalentBooking = async (receiverId) => {
        return await axios.post(`${this.endPoint()}/bookings/${receiverId}`,{},{ withCredentials: true });
    }
}

export default new Booking;