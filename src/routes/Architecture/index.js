export default (store) => ({
  path : 'architecture',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/ArchitectureView').default
      cb(null, Component)
    }, 'architecture')
  }
})
