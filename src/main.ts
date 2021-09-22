import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  const token = core.getInput('token')
  //   const env = core.getInput('envirnment')
  //   const type = core.getInput('type')
  //   const ref = github.context.ref
  const owner = github.context.repo.owner
  const repo = github.context.repo.repo

  // Get octokit client for making API calls
  const octokit = github.getOctokit(token)

  const tags = await octokit.request(`GET /repos/${owner}/${repo}/git/tags/`).catch(e => console.log(e))
  console.log(tags)


  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
}

try {
  run()
} catch (error: any) {
  core.setFailed(error.message)
}