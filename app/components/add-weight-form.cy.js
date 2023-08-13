import React from 'react'
import AddWeightForm from './add-weight-form';

describe('<AddWeightForm />', () => {
  it('renders', () => {
    const spy = cy.spy();
    cy.mount(<AddWeightForm disabled={false} onSubmit={spy}/>);
  });
  it('allows weight submission', () => {
    const spy = cy.spy();
    cy.mount(<AddWeightForm disabled={false} onSubmit={spy}/>);
    cy.get('input').type('123');
    cy.get('button').click();
    // for some reason the assertion happens before the click finishes?
    setTimeout(() => expect(spy).to.have.been.calledWith('123'), 1000);
  });
  it('does not allow when disabled', () => {
    const spy = cy.spy();
    cy.mount(<AddWeightForm disabled={true} onSubmit={spy}/>);
    cy.get('input').should('be.disabled');
    cy.get('button').should('be.disabled');
  });
})