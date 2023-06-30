describe('Sign Up Scenario', () => {
  it('Success Sign Up', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click()
    cy.get('#sign-username').type('rifky123123')
    cy.get('#sign-password').type('rifky123123')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})