export default (store) => ({
  path : 'optimization',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/OptimizationView').default
      cb(null, Component)
    }, 'optimization')
  }
})
