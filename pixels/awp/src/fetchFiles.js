import * as f from '@rex/f'

const cache = {}
const fetchFiles = (publicPath) =>
  new Promise((resolve) =>
    f.has(publicPath, cache)
      ? resolve(cache[publicPath])
      : fetch(`${publicPath}/stats.json`)
          .then(response => response.json())
          .then(stats => stats.assetsByChunkName)
          .then(assets => assets.main)
          .then(main => f.flatten([
            f.filter(main, f.test(/\.js$/)),
            f.filter(main, f.test(/\.css$/))
          ]))
          .then(result => (cache[publicPath] = result))
          .then(resolve)
  )

export default fetchFiles