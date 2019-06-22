import test from 'ava'
import fetch from '..'

test('fetch content', async t => {
  const content = await fetch({
    owner: 'evillt',
    repo: 'fetch-gh-content',
    filepath: '__test__/plaintext'
  })
  t.is(content.trimRight(), `oh my fetch-gh-content`)
})

test('is directory', async t => {
  const res = await fetch({
    owner: 'evillt',
    repo: 'vue-auto-routes',
    filepath: 'lib'
  })
  t.is(Array.isArray(res), true)
})
