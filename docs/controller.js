import http from './http.js';

const getUserName = async (username) => {
    return await http.get(username);
}

export default {
    getUserName
}