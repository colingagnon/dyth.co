import React, { Component } from 'react'
import PropTypes from 'prop-types'
import enquire from 'enquire.js'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { drawerUpdate } from '../store/global'

// TODO header waterfall
// import * as mdc from '../../node_modules/material-components-web/dist/material-components-web'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    // TODO header waterfall
    // mdc.autoInit()
    // let header = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'))
    // header.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust')

    // TODO holy hell this is hacky and coupled
    try {
      enquire.register('screen and (min-width:1000px)', () => {
        this.props.store.dispatch(drawerUpdate({ drawerOpen: true, drawerMaximized: true }))
      })

      enquire.register('screen and (max-width:1000px)', () => {
        this.props.store.dispatch(drawerUpdate({ drawerOpen: false, drawerMaximized: false }))
      })
    } catch (err) {
    }
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
