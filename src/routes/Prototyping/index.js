export default (store) => ({
  path : 'prototyping',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/PrototypingView').default
      cb(null, Component)
    }, 'prototyping')
  }
})
