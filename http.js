function fetch(http, url, options) {
  return new Promise(resolve => {
    http.get(url, options, res => {
      res.setEncoding('utf8')

      let rawData = ''

      res.on('data', data => {
        rawData += data
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData))
        } catch (error) {}

        resolve(rawData)
      })
    })
  })
}

module.exports = function(url, options) {
  const isHttps = url.startsWith('https')

  return fetch(isHttps ? require('https') : require('http'), url, options)
}
