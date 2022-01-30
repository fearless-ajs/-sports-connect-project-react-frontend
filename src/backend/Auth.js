import Helper, {endPoint} from "./Api";
import axios from "axios";
import Api from "./Api";

class Auth extends Api{

    authenticateUser = async (email, password) => {
        return await axios.post(`${this.endPoint()}/users/sign-in`, {
            email,
            password
        },{ withCredentials: true });
    }

    verifyAccount = async token => {
        return await axios.get(`${this.endPoint()}/users/verify-user/v-token/${token}`,{ withCredentials: true });
    }

    registerUser = async (name, email, phone, password, confirmPassword) => {
        return await axios.post(`${this.endPoint()}/users/sign-up`, {
            name,
            email,
            phone,
            password,
            passwordConfirm: confirmPassword
        },{ withCredentials: true });
    }

    updateUser = async (formData) => {
        return await axios.patch(`${this.endPoint()}/users/update-me`, formData,{ withCredentials: true });
    }


    updateSettings = async (...data) => {
        return await axios.post(`${this.endPoint()}/system`, { data
        },{ withCredentials: true })
            .then(response => {
                return response
            })
            .catch(error => {
                // console.log(error.response.data)
                return error
            });
    }

    isUserLoggedIn = async () => {
        return await axios.post(`${this.endPoint()}/users/is-logged-in`, {
        },{ withCredentials: true });
    }

    logout = async () => {
       await axios.post(`${this.endPoint()}/users/sign-out`, {},{ withCredentials: true });
    }
}

export default new Auth;