import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, Button } from 'react-mdc-web'
import './HeaderMenu.scss'
// import LogoImage from './logo.png'
// <img src={LogoImage} className='logo-image' />

// TODO waterfall doesn't work in deps yet, need to revisit
// mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior
export const HeaderMenu = (props) => (
  <Toolbar fixed className='dythco-header'>
    <ToolbarRow>
      <ToolbarSection align='start' style={{ overflow: 'visible' }}>
        {!props.drawerMaximized
          ? <ToolbarTitle style={{ overflow: 'visible' }}>
            <button className='dythco-header__pill-menu material-icons' onClick={props.drawerToggle}>menu</button>
          </ToolbarTitle>
          : null
        }
        <ToolbarTitle style={{ overflow: 'visible' }}>
          <IndexLink to='/' className='dythco-header__button mdc-theme--text-primary-on-primary'>
            Dythco Consulting
          </IndexLink>
        </ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection align='end' style={{ width:  '50px' }}>
        <Link
          to='/contact'
          className='mdc-button mdc-button--compact dythco-header__button mdc-theme--text-primary-on-primary'
        >
            Contact
        </Link>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
)

HeaderMenu.propTypes = {
  drawerMaximized: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired
}

export default HeaderMenu
