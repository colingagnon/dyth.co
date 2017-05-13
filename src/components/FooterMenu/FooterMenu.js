import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Caption, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, Button } from 'react-mdc-web'
import './FooterMenu.scss'

// mdc-toolbar--fixed

export const FooterMenu = (props) => (
  <footer className='dythco-footer'>
    <Caption className='dythco-footer__caption'>Copyright &copy; Dyth.co 2017</Caption>
    <Link to='/legal' className='dythco-footer__button'>
      <Caption>Legals</Caption>
    </Link>
  </footer>
)

//dythco-footer__caption
/*
<Toolbar className='dythco-footer'>
    <ToolbarRow className='dythco-footer__toolbar-row'>
      <ToolbarSection align='start' style={{ overflow: 'visible' }}>
        <Caption className='dythco-footer__caption'>Copyright &copy; Dyth.co 2017</Caption>
      </ToolbarSection>
      <ToolbarSection align='end' style={{ width:  '50px' }}>
        <Link to='/legal' className='dythco-footer__button'>
            Legal
        </Link>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
<Link to='/contact' className='mdc-button mdc-button--compact button-text mdc-theme--text-primary-on-primary'>
            Legals
        </Link>
 */
FooterMenu.propTypes = {
}

export default FooterMenu
