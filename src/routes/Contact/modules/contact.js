import api from './../../../api'

// ------------------------------------
// Constants
// ------------------------------------
export const CONTACT_CHANGE = 'CONTACT_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function contactChange (params) {
  return {
    type    : CONTACT_CHANGE,
    payload : params
  }
}

export const requestService = (event) => {
  return (dispatch, getState) => {
    event.preventDefault()

    dispatch(contactChange({ loading: true }))
    return new Promise((resolve) => {
      api.RequestService(event.target,
        () => {
          let message = 'Thank you for your interest, we will be in touch shortly!'
          dispatch(contactChange({ loading: false, success: message, data: {} }))
          resolve()
        },

        () => {
          let error = 'Sorry, there was an error processing your request.'
          dispatch(contactChange({ loading: false, error: error }))
          resolve()
        }
      )
    })
  }
}

export const formChange = (event) => {
  return (dispatch, getState) => {
    let data = getState().contact.data

    if (event.target.type === 'checkbox') {
      data[event.target.name] = !data[event.target.name]
    } else {
      data[event.target.name] = event.target.value
    }

    dispatch(contactChange({ data: data }))
  }
}

export const actions = {
  requestService,
  formChange
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTACT_CHANGE] : (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  success: '',
  error: '',
  data: {
    email: '',
    name: '',
    company_name: '',
    description: '',
    training: false,
    recruiting: false,
    assessments: false,
    architecture: false,
    optimization: false,
    automation: false,
    prototyping: false
  }
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
