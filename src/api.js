import superagent from 'superagent'
import env from './../env'

const extractFormData = (form) => {
  const formData = new FormData(form)
  let data = {}
  for (let [key, value] of formData) {
    data[key] = value
  }
  return data
}

export const RequestService = (form, success, failure) => {
  superagent
    .post(env.REQUEST_SERVICE_URL)
    .accept('*')
    .type('form')
    .send(extractFormData(form))
    .then(success, failure)
}

export default {
  RequestService: RequestService
}

