import slides from './slides'

// ------------------------------------
// Constants
// ------------------------------------
export const BACKGROUND_CHANGE = 'BACKGROUND_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function backgroundChange (params) {
  return {
    type    : BACKGROUND_CHANGE,
    payload : params
  }
}

export const startShow = (event) => {
  return (dispatch, getState) => {
    const state = getState()
    const show = event.target.getAttribute('data-show')

    // If we have a show
    if (show && state.background[show]) {
      let showSlides = []

      // Build slides array
      state.background[show].map((name) => {
        // If we have a slide and the level is not higher
        if (slides[name] && state.background.level >= slides[name].level) {
          showSlides.push(slides[name])
        }
      })

      // Update slides
      dispatch(backgroundChange({ slides: showSlides }))
    }
  }
}

export const formChange = (event) => {
  return (dispatch, getState) => {
    let data = getState().background

    // Toggle nerd level
    if (event.target.type === 'checkbox' && event.target.name === 'level') {
      // Only has two modes for now
      if (data[event.target.name] === 2) {
        data[event.target.name] = 1
      } else {
        data[event.target.name] = 2
      }
    }

    dispatch(backgroundChange({ data: data }))
  }
}

export const actions = {
  startShow,
  formChange
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BACKGROUND_CHANGE] : (state, action) => Object.assign({}, state, action.payload)
}
//
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  level: 1,
  current: 1,
  slides: [],
  recent: [],
  relevant: [],
  middle: [],
  beginning: [
    'ti994a',
    'bbs_lord',
    'computer_club_award',
    'hypercard_games',
    'precss_school_site'
  ]
}

export default function backgroundReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
