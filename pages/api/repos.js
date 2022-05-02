const { request } = require("@octokit/request");

export default async function handler(req, res) {
  const repos = await request("GET /user/repos", {
    headers: {
      authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    per_page: 100,
  });
  res.json({ repos });
}
