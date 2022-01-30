import React from "react";
class Api{
    constructor() {
        if (process.env.NODE_ENV === 'development') {
            this.serverLink = 'http://127.0.0.1:5000'
        }else {
            this.serverLink = 'https://sportspadi.com'
        }
    }

    endPoint = () => {
        return `${this.serverLink}/api/v1`
    }

    userImagePath = (filename) => {
        return `${this.serverLink}/uploads/images/users/${filename}`
    }

    postsMediaPath = (filename) => {
        return `${this.serverLink}/uploads/images/posts/${filename}`
    }

    systemImagePath = (filename) => {
        return `${this.serverLink}/uploads/images/system/${filename}`
    }
}

export default Api;
