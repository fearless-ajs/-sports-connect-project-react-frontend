import axios from "axios";
import Api from "./Api";

class Post extends Api{

    createPost = async (data) => {
        return await axios.post(`${this.endPoint()}/posts`, data,{
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
    }
    fetchAllPosts = async () => {
        return await axios.get(`${this.endPoint()}/posts?sort=-createdAt`,{ withCredentials: true });
    }

    fetchAllUserPosts = async (userId) => {
        return await axios.get(`${this.endPoint()}/posts?user=${userId}`,{ withCredentials: true });
    }


}

export default new Post;