export default (store) => ({
  path : 'automation',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/AutomationView').default
      cb(null, Component)
    }, 'automation')
  }
})
