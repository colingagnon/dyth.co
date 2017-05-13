export default (store) => ({
  path : 'placements',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./components/PlacementsView').default
      cb(null, Component)
    }, 'placements')
  }
})
