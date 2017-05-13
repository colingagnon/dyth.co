export default (store) => ({
  path : 'assessments',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/AssessmentsView').default
      cb(null, Component)
    }, 'assessments')
  }
})
