export default (store) => ({
  path : 'legals',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/LegalsView').default
      cb(null, Component)
    }, 'legals')
  }
})
