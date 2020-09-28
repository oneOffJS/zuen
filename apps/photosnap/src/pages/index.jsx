import h, { render } from '@rex/h'
import router from '@rex/router'
import '@rex/reset'

router(/^\/$/, async () => {
  const { default: Home } = await import('@pages/home' /* webpackPrefetch: true, webpackPreload: 1, webpackChunkName: "home" */)
  render(document.body, <Home />)
})

router(/^\/features$/, async () => {
  const { default: Features } = await import('@pages/features' /* webpackPrefetch: true, webpackPreload: 2, webpackChunkName: "features" */)
  render(document.body, <Features />)
})

router(/^\/pricing$/, async () => {
  const { default: Pricing } = await import('@pages/pricing' /* webpackPrefetch: true, webpackPreload: 3, webpackChunkName: "pricing" */)
  render(document.body, <Pricing />)
})

router(/^\/stories$/, async () => {
  const { default: Stories } = await import('@pages/stories' /* webpackPrefetch: true, webpackPreload: 4, webpackChunkName: "stories" */)
  render(document.body, <Stories />)
})
