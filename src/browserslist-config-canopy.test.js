const path = require('path')
const browserslist = require('browserslist')
const queries = require('./browserslist-config-canopy.js')

describe('browserslist-config-canopy', () => {
  it(`exports a valid browserslist config that is what we want for Canopy`, () => {
    const browsers = browserslist(queries)
    expect(browsers).toMatchSnapshot()
  })
})
