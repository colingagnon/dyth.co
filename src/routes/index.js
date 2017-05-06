import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import ContactRoute from './Contact'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    ContactRoute(store)
  ]
})

export default createRoutes
