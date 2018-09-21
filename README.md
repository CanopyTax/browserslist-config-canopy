# browserslist-config-canopy
Canopy's browsers list config. Use this in conjunction with [@babel/preset-env](https://babeljs.io/docs/plugins/preset-env/) to compile your code down to the correct browser targets.
Babel's preset-env uses [browserslist](https://github.com/ai/browserslist) underneath the hood to determine what target to compile your code down to.

Notes:
- This is for the end user app and the config includes safari, chrome, firefox, and edge.
- This should **not** be used in the SME tool since that doesn't have to support old, crappy browsers.
- You must use `@babel/preset-env` in order for this to work. `babel-preset-env` won't work because it uses an old version
  of browserslist that doesn't support inheriting configs. This means you have to be using babel 7 or greater.
- See [this file](https://github.com/CanopyTax/browserslist-config-canopy/blob/master/src/browserslist-config-canopy.js) to see which browsers are supported.
- The [snapshot test](https://github.com/CanopyTax/browserslist-config-canopy/blob/master/src/__snapshots__/browserslist-config-canopy.test.js.snap) shows exactly
  which browsers were captured by the config **the last time we updated the browserslist library**. Since our browser versions are a moving target that changes over time,
  the only way that the browsers support is updated is by updating the `browserslist` library in this repo.

## Usage
In your package.json, create a browserslist property that extends the canopy config. Read [here](https://github.com/ai/browserslist#shareable-configs) for more details.
```json
{
  "browserslist": [
    "extends browserslist-config-canopy"
  ]
}
```

In your .babelrc, add 'babel-preset-env'. You do not need to add any config options to it in here because babel-preset-env
uses browserslist which already looks at your package.json's `"browserslist"` config by default.
```js
{
  presets: ['@babel/preset-env']
}
```

If you use `css-loader`, you may have issues where it uses an older version of browserslist that doesn't support inheriting configs.
If so, add the following to your package.json to force css-loader/cssnano/autoprefixer to use a later version of browserslist. You
can read more about yarn resolutions [here](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/)

Be sure to replace `4.1.1` with the latest version of browserslist!

```json
{
  "resolutions": {
    "browserslist": "4.1.1"
  }
}
```
