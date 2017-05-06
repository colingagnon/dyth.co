import React from 'react'
import { Link } from 'react-router'
import {
  Grid, Cell,
  Title, Body1, Button,
  Card, CardHeader, CardTitle, CardText, CardActions
} from 'react-mdc-web'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Title>Dythco Consulting</Title>
    <Body1>
      123123123
    </Body1>
    <Grid>
      <Cell col={6} tablet={8} phone={4}>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className='section-title'>Lunch and Learn</span>
            </CardTitle>
          </CardHeader>
          <CardText className='event-card-text'>
            <p>
            </p>
          </CardText>
          <CardActions>
            <Link to='' target='_blank'>
              <Button>More Details</Button>
            </Link>
          </CardActions>
        </Card>
      </Cell>
      <Cell col={6} tablet={8} phone={4}>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className='section-title'>Mentorship and Training</span>
            </CardTitle>
          </CardHeader>
          <CardText className='event-card-text'>
            <p>
            </p>
          </CardText>
          <CardActions>
            <Link to='' target='_blank'>
              <Button>More Details</Button>
            </Link>
          </CardActions>
        </Card>
      </Cell>
    </Grid>

    <Title>Lively Conversations</Title>
    <Body1>
      123123
    </Body1>
  </div>
)

export default HomeView
