import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import {
  Grid, Cell,
  Title, Body1, Button, Switch,
  Card, CardHeader, CardTitle, CardText, CardActions
} from 'react-mdc-web'
import './BackgroundView.scss'
import SlideShow from 'components/SlideShow'
import Normal from './../assets/normal.jpg'
import Nerd from './../assets/nerd.png'

/**
 * 1992 - TI-99/4A / Basic
 * 1993 - Setup BBS / LORD
 * 1994 - Computer Club Award
 * 1995 - Hypercard Games
 * 1995 - Pre-CSS School Site
 * 1996 - Wing Commander Privateer
 * 1997 - Pretend Grey Hat
 * 1998 - StarCraft
 * 1999 - Computer Hardware Sales Site
 * 2000 - Student Painter
 * 2001 - PHP, PHP, PHP
 * 2001 - Pure Flash Web Site
 * 2002 - Static Paypal sites
 * 2002 - CS School
 * 2003 - Freelance projects
 * 2005 - Custom software
 * 2006 - JQuery, JQuery, JQuery
 * 2006 - Munich Semester
 * 2006 - Employee training
 * 2006 - Supporting clients
 * 2007 - Custom logistics software
 * 2007 - IT Consulting services
 * 2007 - Hosting services
 * 2008 - Software Maintenance & New Features
 * 2008 - Joomla, Wordpress, ECommerce sites
 * 2009 - Failed Startup
 * 2010 - So much Javascript
 * 2011 - Custom Magento sites
 * 2011 - JavaScript tutoring
 * 2011 - Random consulting
 * 2011 - More websites
 * 2011 - Seedbox Technologies
 * 2011 - PHP Legacy support
 * 2011 - Supporting internal systems
 * 2012 - Payment Processing integrations
 * 2012 - Developer Mentoring
 * 2012 - DDOS mitigation
 * 2012 - Lunch and Learns
 * 2013 - REST API Design and SOA
 * 2013 - Automated Testing
 * 2014 - Won Collaboration Award
 * 2015 - Architecture Lead
 * 2015 - PSL Group Inc.
 * 2016 - Spotful
 * 2016 - CTO Discoder
 * 2017 - Lead Software Engineer
 *
 * Basic idea:
 * Setup slides for history
 * Define slides for each path
 * Do other weird stuff to the user, more nerd slides?
 * Swipe on mobile
 *                                       Intro (Choose a path)
 *                                                |
 *  In the beginning...    Somewhere in the middle...    When it's relevant...   Recent Highlights
 *
 * @constructor
 */
export const BackgroundView = (props) => (
  <div className='dythco-background'>
    {props.background.slides.length > 0
      ? <SlideShow />
      : <Grid className='dythco-background__content'>
        <Cell col={6} tablet={8} phone={4} className='dythco-background__image'>
          <div
            className='dythco-background__avatar'
            style={{ backgroundImage: `url(${props.background.level > 1 ? Nerd : Normal})` }}
          />
          <div className='dythco-background__icon-set'>
            <Link
              to='https://github.com/colingagnon'
              className='dythco-background__icon dythco-background__icon-set_left'
              target='_blank'>
              <i className='fa fa-3x fa-github' aria-hidden='true' />
            </Link>
            <Link
              to='https://www.linkedin.com/in/colin-gagnon-19967320/'
              className='dythco-background__icon dythco-background__icon-set_right'
              target='_blank'>
              <i className='fa fa-3x fa-linkedin' aria-hidden='true' />
            </Link>
          </div>
        </Cell>
        <Cell col={6} tablet={8} phone={4} className='dythco-background__summary'>
          <Title className='dythco-background__title'>Colin Gagnon</Title>
          <Body1>
            Leader, mentor, hacker, mad scientist, <br />
            fanatic, lifetime student, and giver of opinions.
          </Body1>
        </Cell>
        <Cell col={12} tablet={8} phone={4} className='dythco-background__menu'>
          <Title className='dythco-background__title'>So where to start...</Title>
          <Grid>
            <Cell col={6} tablet={8} phone={4}>
              <Button raised primary className='dythco-background__start-button'>Recent Highlights</Button>
            </Cell>
            <Cell col={6} tablet={8} phone={4}>
              <Button raised primary className='dythco-background__start-button'>When it's most relevant</Button>
            </Cell>
            <Cell col={6} tablet={8} phone={4}>
              <Button raised primary className='dythco-background__start-button'>Somewhere in the middle</Button>
            </Cell>
            <Cell col={6} tablet={8} phone={4}>
              <Button
                raised primary
                data-show='beginning'
                onClick={props.startShow}
                className='dythco-background__start-button'
              >
                At the beginning
              </Button>
            </Cell>
          </Grid>
          <Title>One more thing...</Title>
          <Grid className='dythco-background__bottom-menu'>
            <Cell col={12} tablet={8} phone={4}>
              {props.background.level > 1 ? 'Full Nerd Mode Engaged!' : 'Somewhat Nerdy'}
            </Cell>
            <Cell col={12} tablet={8} phone={4}>
              <Switch
                name='level'
                checked={props.background.level > 1}
                onChange={props.formChange} />
            </Cell>
          </Grid>
        </Cell>
      </Grid>}
  </div>
)

BackgroundView.propTypes = {
  startShow: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  background: PropTypes.shape({
    level: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    slides: PropTypes.array.isRequired
  })
}

BackgroundView.defaultProps = {
  background: {
    level: 1
  }
}

export default BackgroundView
