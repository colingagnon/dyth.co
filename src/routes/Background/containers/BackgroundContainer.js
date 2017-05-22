import { connect } from 'react-redux'
import BackgroundView from '../components/BackgroundView'
import { startShow, formChange } from '../modules/background'

const mapDispatchToProps = {
  startShow,
  formChange
}

const mapStateToProps = (state) => ({
  background : state.background
})

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundView)
