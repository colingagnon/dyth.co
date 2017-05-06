import { connect } from 'react-redux'
import { drawerToggle } from '../../store/global'
import CoreLayout from './CoreLayout'

const mapDispatchToProps = {
  drawerToggle: drawerToggle
}

const mapStateToProps = (state) => ({
  global : state.global
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
