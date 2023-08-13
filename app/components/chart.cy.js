import React from 'react'
import Chart from './chart'
import { mockData } from '../../cypress/mocks'

describe('<Chart />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Chart data={mockData}/>)
  })
})