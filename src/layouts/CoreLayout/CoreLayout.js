import React from 'react'
import PropTypes from 'prop-types'
import { Content, Caption } from 'react-mdc-web'
import HeaderMenu from '../../components/HeaderMenu'
import DrawerMenu from '../../components/DrawerMenu'
import './CoreLayout.scss'
import 'material-components-web/dist/material-components-web.min.css'
import '../../styles/core.scss'

export const CoreLayout = (props) => (
  <div>
    <HeaderMenu
      drawerOpen={props.global.drawerOpen}
      drawerMaximized={props.global.drawerMaximized}
      drawerToggle={props.drawerToggle}
      />
    <Content style={{
      display: 'flex',
      boxSizing: 'border-box',
      flex: 1,
      minHeight: '600px'
    }}>
      <DrawerMenu
        drawerOpen={props.global.drawerOpen}
        drawerMaximized={props.global.drawerMaximized}
        drawerToggle={props.drawerToggle}
      />
      <div className='core-layout__viewport'>
        {props.children}
      </div>
    </Content>
    <footer className='dythco-footer'>
      <Caption>Copyright &copy; Dyth.co 2017</Caption>
    </footer>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  drawerToggle: PropTypes.func.isRequired,
  global: PropTypes.object.isRequired
}

export default CoreLayout
