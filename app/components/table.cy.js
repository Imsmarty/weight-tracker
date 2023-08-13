import React from 'react'
import Table from './table'
import { mockData } from '../../cypress/mocks'

describe('<Table />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Table data={mockData}/>)
  })
})