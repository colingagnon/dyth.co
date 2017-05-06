import { connect } from 'react-redux'
import ContactView from '../components/ContactView'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  contact : state.contact
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactView)
