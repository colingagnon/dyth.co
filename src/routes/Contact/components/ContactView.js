import React from 'react'
import PropTypes from 'prop-types'
import { Title, Body1 } from 'react-mdc-web'
import RequestForm from 'components/RequestForm'
import './ContactView.scss'

export const ContactView = (props) => (
  <div className='dythco-contact-view'>
    <Title>Contact Us</Title>
    {props.contact.success
      ? <div className='dythco-message dythco-success dythco-contact-view__success'>{props.contact.success}</div>
      : null}

    {!props.contact.success
      ? <div>
        <Body1>
          Please use the form below to provide some information on your needs.
          We'll setup a time to discuss further and go from there!
        </Body1>
        <RequestForm
          submitHandler={props.requestService}
          changeHandler={props.formChange}
          loading={props.contact.loading}
          error={props.contact.error}
          data={props.contact.data}
        />
      </div>
      : null}
  </div>
)

ContactView.propTypes = {
  requestService: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    success: PropTypes.string,
    data: PropTypes.object
  })
}

export default ContactView
