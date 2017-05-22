import React from 'react'
import { Link } from 'react-router'
import { Caption } from 'react-mdc-web'
import './FooterMenu.scss'

export const FooterMenu = (props) => (
  <footer className='dythco-footer'>
    <Caption className='dythco-footer__caption'>Copyright &copy; Dyth.co 2017</Caption>
    <Link to='https://github.com/colingagnon/dyth.co' target='_blank' className='dythco-footer__button'>
      <Caption>
        View Source&nbsp;<i className='fa fa-1x fa-github' aria-hidden='true' />
      </Caption>
    </Link>
  </footer>
)

export default FooterMenu
