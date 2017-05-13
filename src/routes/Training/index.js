export default (store) => ({
  path : 'training',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/TrainingView').default
      cb(null, Component)
    }, 'training')
  }
})
