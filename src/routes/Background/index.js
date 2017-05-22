import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'background',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./containers/BackgroundContainer').default
      const reducer = require('./modules/background').default
      injectReducer(store, { key: 'background', reducer })

      cb(null, Component)
    }, 'background')
  }
})
