import React from 'react'
import {
  Content, Grid, Cell,
  Title, Body1, Caption, Button,
  Card, CardHeader, CardTitle, CardText, CardActions
} from 'react-mdc-web'
import './ContactView.scss'

export const Contact = () => (
  <Content>
    <Title>Contact Us</Title>
    <Body1>
      Please use the form below to provide some information on your needs.
      We'll setup a time to discuss further and go from there!
    </Body1>
  </Content>
)

export default Contact
