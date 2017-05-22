// ------------------------------------
// Constants
// ------------------------------------
export const DRAWER_CHANGE = 'DRAWER_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function drawerChange (params) {
  return {
    type    : DRAWER_CHANGE,
    payload : params
  }
}

export const drawerToggle = () => {
  return (dispatch, getState) => {
    dispatch(drawerChange({ drawerOpen: !getState().global.drawerOpen }))
  }
}

export const drawerOpen = () => {
  return (dispatch, getState) => {
    dispatch(drawerChange({ drawerOpen: true }))
  }
}

export const drawerClose = () => {
  return (dispatch, getState) => {
    dispatch(drawerChange({ drawerOpen: false }))
  }
}

export const drawerUpdate = (params) => {
  return (dispatch, getState) => {
    dispatch(drawerChange(params))
  }
}

export const actions = {
  drawerUpdate,
  drawerToggle,
  drawerOpen,
  drawerClose
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DRAWER_CHANGE] : (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  drawerOpen: false,
  drawerMaximized: false
}
export default function globalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  // TODO decide where to put this longer term
  // Automatically close menu on all location changes
  if (action.type === 'LOCATION_CHANGE' && state.drawerOpen && !state.drawerMaximized) {
    state.drawerOpen = false
  }

  return handler ? handler(state, action) : state
}
