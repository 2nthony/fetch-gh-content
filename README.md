# fetch-gh-content

> Fetch github repo content

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/fetch-gh-content?icon=npm)](https://npmjs.com/package/fetch-gh-content)
[![NPM download](https://badgen.net/npm/dm/fetch-gh-content?icon=npm)](https://npmjs.com/package/fetch-gh-content)
[![CircleCI](https://badgen.net/circleci/github/evillt/fetch-gh-content?icon=circleci)](https://circleci.com/gh/evillt/fetch-gh-content/tree/master)
[![License](https://badgen.net/npm/license/fetch-gh-content)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

- tiny size
- zero dependencies

## Install

```sh
yarn add fetch-gh-content
```

## Usage

```js
const fetch = require('fetch-gh-content')

;(async () => {
  const content = await fetch({
    owner: 'evillt',
    repo: 'fetch-gh-content',
    filepath: '__test__/plaintext'
  })

  console.log(content) // oh my fetch-gh-content
  // Use it do something you want, e.g. `fs.writeFile`
})()
```

## API

`fetchGhContent(options): Promise<string | Array<object>>`

### `options: object`

#### `options.owner: string`

GitHub repo owner

#### `options.repo: string`

GitHub repo name

#### `options.filepath: PathLike`

GitHub repo file path

#### `options.token?: string`

- Default: `process.env.GITHUB_TOKEN`

GitHub access token

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**fetch-gh-content** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/fetch-gh-content/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
