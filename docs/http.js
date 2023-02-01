import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({
    auth: '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'
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