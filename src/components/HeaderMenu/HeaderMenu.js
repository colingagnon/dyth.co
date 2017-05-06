import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, Button } from 'react-mdc-web'
import './HeaderMenu.scss'
// import LogoImage from './logo.png'
// <img src={LogoImage} className='logo-image' />

//<header class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior">
export const HeaderMenu = (props) => (
  <Toolbar fixed className='mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior'>
    <ToolbarRow>
      <ToolbarSection align='start'>
        {!props.drawerMaximized
          ? <ToolbarTitle>
            <button className='pill-menu material-icons' onClick={props.drawerToggle}>menu</button>
          </ToolbarTitle>
          : null
        }
        <ToolbarTitle>
          <IndexLink to='/' className='button-text mdc-theme--text-primary-on-primary'>
            Dythco
          </IndexLink>
        </ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection align='end'>
        {/*
        <IndexLink to='/' className='mdc-button mdc-button--compact button-text mdc-theme--text-primary-on-primary'>
            Home
        </IndexLink>
        */}
        <Link to='/contact' className='mdc-button mdc-button--compact button-text mdc-theme--text-primary-on-primary'>
            Contact
        </Link>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
)

HeaderMenu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  drawerMaximized: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired
}

export default HeaderMenu
