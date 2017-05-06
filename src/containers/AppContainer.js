import React, { Component } from 'react'
import PropTypes from 'prop-types'
import enquire from 'enquire.js'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { drawerUpdate } from '../store/global'

//import { MDCToolbar } from 'material-components-web'

//console.log(MDCToolbar);

//

/*

      (function() {
        var pollId = 0;
        pollId = setInterval(function() {
          var pos = getComputedStyle(document.querySelector('.mdc-toolbar')).position;
          if (pos === 'fixed' || pos === 'relative') {
            init();
            clearInterval(pollId);
          }
        }, 250);
        function init() {
          var ratioSpan = document.querySelector("#ratio");
          var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
          toolbar.listen('MDCToolbar:change', function(evt) {
            var flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
            ratioSpan.innerHTML = flexibleExpansionRatio.toFixed(2);
          });
          toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
        }
      })();

 */
class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    //let toolbar = document.mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'))
    //toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust')

    // TODO holy hell this is hacky and coupled
    try {
      enquire.register('screen and (min-width:950px)', () => {
        this.props.store.dispatch(drawerUpdate({ drawerOpen: true, drawerMaximized: true }))
      })

      enquire.register('screen and (max-width:950px)', () => {
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
