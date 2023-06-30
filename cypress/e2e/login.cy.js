describe('Login Scenario', () => {
  it('Success Login', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('kjks')
    cy.wait(12)
    cy.get('#loginpassword').type('kjks')
    cy.wait(12)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logout2').should('be.visible')
  })
})