import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({})

const get = async (username) => {
    try {
        const user = await octokit.request(`GET /users/${username}`, {
            username: 'USERNAME'
        });

        return user.data;
    } catch (error) {
        throw error;
    }

}

export default {
    get
}