import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({
    auth: ''
})

const get = async (username) => {
    const user = await octokit.request(`GET /users/${username}`, {
        username: 'USERNAME'
    })

    window.console.log([user]);
}

export default {
    get
}