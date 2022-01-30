import Helper, {endPoint} from "./Api";
import axios from "axios";
import Api from "./Api";

class Contact extends Api{

    addNewContact = async (email, name) => {
        return await axios.post(`${this.endPoint()}/contacts`, {
            email,
            name
        },{ withCredentials: true });
    }

}

export default new Contact;