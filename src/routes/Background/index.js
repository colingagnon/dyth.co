export default (store) => ({
  path : 'background',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/BackgroundView').default
      cb(null, Component)
    }, 'background')
  }
})
