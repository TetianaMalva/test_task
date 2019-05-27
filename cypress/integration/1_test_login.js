/// <reference types="Cypress" />

describe('As a user, I can login to the application', function () {

  it('login', function () {

    cy.visit('/')
    cy.get('[ng-model="user.name"]').type("Luke")
    cy.get('[ng-model="user.password"]').type("Skywalker")
    // click "Login" button
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/employees')
    cy.get('[id="greetings"]').contains('Hello ')
  })
})