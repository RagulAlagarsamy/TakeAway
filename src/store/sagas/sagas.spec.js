import test from 'tape'

import addItems from './user'

const value = {}

test('addItems Saga test', (assert) => {
    const gen = addItems()
    console.log(gen.next(value));
    assert.deepEqual(
      gen.next(value).value,
      put({ type: 'users/increaseItems', value }),
      "fetchProducts should yield an Effect put({ type: 'users/increaseItems', value })"
    )
  })