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
          <i className='material-icons dythco-drawer__icon-header'>memory</i>
          <span className='dythco-mdc--drawer--header'>Dythco Consulting</span>
        </DrawerHeaderContent>
      </DrawerHeader>
      : null
    }

    <DrawerContent>

      <Navigation>
        <IndexLink to='/' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='home' />Home
        </IndexLink>
        <Link to='/contact' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='email' />Contact
        </Link>
        <Link to='/background' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='work' />Background
        </Link>
      </Navigation>
      {/*
      <DrawerSpacer>
        Services
      </DrawerSpacer>
      */}
      <Navigation className='dythco-drawer__spacer'>
        <Link to='/training' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='school' />Training and Mentorship
        </Link>
        <Link to='/placements' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='people_outline' />Developer Placements
        </Link>
        <Link to='/assessments' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='assessment' />Technology Assessments
        </Link>
        <Link to='/architecture' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='developer_board' />Architecture Consulting
        </Link>
        <Link to='/optimization' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='history' />Application Optimization
        </Link>
        <Link to='/automation' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='widgets' />Process Automation
        </Link>
        <Link to='/prototyping' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='lightbulb_outline' />Prototyping
        </Link>
      </Navigation>
      <Navigation className='dythco-nav--spacer dythco-drawer__bottom dythco-drawer__spacer'>
        <Link to='/legals' className='dythco-drawer__link' activeClassName='mdc-temporary-drawer--selected'>
          <Icon name='business' />Legals
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
