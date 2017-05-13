import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import {
  Textfield, FormField, Checkbox, Button, Caption
} from 'react-mdc-web'
import './RequestForm.scss'

export const RequestForm = (props) => (
  <form onSubmit={props.submitHandler}>
    <Textfield
      className='dythco-request-form__field'
      floatingLabel='Email'
      name='email'
      value={props.data.email}
      onChange={props.changeHandler}
      disabled={props.loading}
      type='email'
      required
      autoFocus
      pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
     />

    <Textfield
      className='dythco-request-form__field'
      floatingLabel='Name'
      name='name'
      value={props.data.name}
      onChange={props.changeHandler}
      disabled={props.loading}
    />
    <Textfield
      className='dythco-request-form__field'
      floatingLabel='Company Name'
      name='company_name'
      value={props.data.company_name}
      onChange={props.changeHandler}
      disabled={props.loading}
    />

    <Textfield
      className='dythco-request-form__field'
      floatingLabel='Description'
      name='description'
      value={props.data.description}
      onChange={props.changeHandler}
      disabled={props.loading}
    />

    <div className='dythco-request-form__title'>Interested in:</div>

    <FormField id='request-form-services-training' className='dythco-request-form__field'>
      <Checkbox
        name='training'
        checked={props.data.training}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Training and Mentorship</label>
    </FormField>

    <FormField id='request-form-services-training' className='dythco-request-form__field'>
      <Checkbox
        name='placements'
        checked={props.data.placements}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Training and Mentorship</label>
    </FormField>

    <FormField id='request-form-services-assessments' className='dythco-request-form__field'>
      <Checkbox
        name='assessments'
        checked={props.data.assessments}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Technology Assessments</label>
    </FormField>

    <FormField id='request-form-services-architecture' className='dythco-request-form__field'>
      <Checkbox
        name='architecture'
        checked={props.data.architecture}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Architecture Consulting</label>
    </FormField>

    <FormField id='request-form-services-optimization' className='dythco-request-form__field'>
      <Checkbox
        name='optimization'
        checked={props.data.optimization}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Application optimization</label>
    </FormField>

    <FormField id='request-form-services-automation' className='dythco-request-form__field'>
      <Checkbox
        name='automation'
        checked={props.data.automation}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Process Automation</label>
    </FormField>

    <FormField id='request-form-services-prototyping' className='dythco-request-form__field'>
      <Checkbox
        name='prototyping'
        checked={props.data.prototyping}
        onChange={props.changeHandler}
        disabled={props.loading}
      />
      <label>Prototyping</label>
    </FormField>

    <Button disabled={props.loading} raised primary className='dythco-request-form__button'>
      {props.loading ? 'Sending...' : 'Send Request'}
    </Button>
    <Caption className='dythco-request-form__caption'>
      All communications are strictly private and confidential,
      read more <Link to='/legal' className='dythco-link'>here</Link>.
    </Caption>
  </form>
)

RequestForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.object
}

RequestForm.defaultProps = {
  loading: false,
  error: '',
  data: {}
}

export default RequestForm
