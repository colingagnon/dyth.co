import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import {
  Drawer,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerSpacer,
  DrawerContent,
  Navigation,
  Icon
} from 'react-mdc-web'
import './DrawerMenu.scss'
// import LogoImage from './logo.png'
// <img src={LogoImage} className='logo-image' />

const DrawerOptionalProps = (props) => {
  let optional = {}
  if (!props.drawerMaximized) {
    optional.onClose = props.drawerToggle
  }
  return optional
}

export const DrawerMenu = (props) => (
  <Drawer
    open={props.drawerOpen}
    permanent={props.drawerMaximized}
    {...(props.drawerToggle ? DrawerOptionalProps(props) : null)}
    style={{ height: 'inherit', minHeight: '100%', width: '350px' }}
  >
    {!props.drawerMaximized
      ? <DrawerHeader>
        <DrawerHeaderContent>
          Dythco Consulting
        </DrawerHeaderContent>
      </DrawerHeader>
      : null
    }

    <DrawerContent>

      <Navigation>
        <IndexLink to='/' activeClassName='mdc-temporary-drawer--selected'><Icon name='home' />Home</IndexLink>
        <Link to='/contact' activeClassName='mdc-temporary-drawer--selected'><Icon name='email' />Contact</Link>
      </Navigation>
      {/*
      <DrawerSpacer>
        Services
      </DrawerSpacer>
      <hr className='dythco-menu--spacer' />
      */}

      <Navigation>
        <Link to='/services/lunchandlearn' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Lunch and Learn as a Service
        </Link>
        <Link to='/services/mentorship' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Mentorship and Training
        </Link>
        <Link to='/services/assessments' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Technology Assessments
        </Link>
        <Link to='/services/architecture' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Architecture Design
        </Link>
        <Link to='/services/prototyping' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Prototyping
        </Link>
        <Link to='/services/optimization' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Optimization
        </Link>
      </Navigation>
    </DrawerContent>
  </Drawer>
)

DrawerMenu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  drawerMaximized: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired
}

export default DrawerMenu
