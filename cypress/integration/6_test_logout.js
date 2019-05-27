/// <reference types="Cypress" />

describe('As a user, I can logout', function () {

  beforeEach('login', () => {
    cy.login()
  })

  it('logout', function () {
    cy.get('[id=employee-list]').should('be.visible')
    cy.contains('Logout').click()

    // should be on a new URL which includes '/login'
    cy.url().should('include', '/login')
    cy.get('[ng-model="user.name"]').should('be.visible')
    cy.get('[ng-model="user.password"]').should('be.visible')
  })
})