import { connect } from 'react-redux'
import ContactView from '../components/ContactView'
import { requestService, formChange } from '../modules/contact'

const mapDispatchToProps = {
  requestService,
  formChange
}

const mapStateToProps = (state) => ({
  contact : state.contact
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactView)
