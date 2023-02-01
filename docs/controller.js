import http from './http.js';

const getUserName = (username) => {
    http.get(username);
}

export default {
    getUserName
}