import CoreLayout from '../layouts/CoreLayout'

import ArchitectureRoute from './Architecture'
import AssessmentsRoute from './Assessments'
import AutomationRoute from './Automation'
import BackgroundRoute from './Background'
import ContactRoute from './Contact'
import Home from './Home'
import LegalsRoute from './Legals'
import OptimizationRoute from './Optimization'
import PlacementsRoute from './Placements'
import PrototypingRoute from './Prototyping'
import TrainingRoute from './Training'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    ArchitectureRoute(store),
    AssessmentsRoute(store),
    AutomationRoute(store),
    BackgroundRoute(store),
    ContactRoute(store),
    LegalsRoute(store),
    OptimizationRoute(store),
    PlacementsRoute(store),
    PrototypingRoute(store),
    TrainingRoute(store)
  ]
})

export default createRoutes
