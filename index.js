const http = require('./http')

module.exports = async function({
  repo,
  token = process.env.GITHUB_TOKEN,
  owner,
  filepath
} = {}) {
  if (!owner || !repo || !filepath) {
    console.error('Missing required params: `owner`, `repo` or `filepath`')
    return
  }

  const options = {
    headers: {
      'User-Agent': 'fetch-gh-content'
    }
  }

  if (token) {
    options.headers.Authorization = `token ${token}`
  }

  const res = await http(
    `https://api.github.com/repos/${owner}/${repo}/contents/${filepath}`,
    options
  )

  if (res.message === 'Not Found') {
    throw new Error('File Not Found')
  }

  if (res.download_url) {
    return http(res.download_url, options)
  }

  return res
}
