const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

export default octokit;
