/// <reference types="Cypress" />

import Employee from '../data/employee'

describe('As a user, I can view a list of employees, with double-clicking I can see details of each employee', function () {

  beforeEach('login', () => {
    cy.login()
  })

  it('view employees list', () => {

    cy.get('[id=employee-list]').should('be.visible')
  })

  it('view employee details by doubleclick', () => {
    // test data setup
    let employee = new Employee("Name" + new Date().getTime(), "LastName", "2019-01-01", "email@test.com")
    cy.addEmployee(employee)

    cy.contains(employee.firstName).should('be.visible')
      // view details of new created employee with double click
      // workaround for known bug in Cypress.io https://github.com/cypress-io/cypress/issues/3224
      .trigger('click', { detail: 1 })
      .trigger('click', { detail: 2 })
      .trigger('dblclick', { detail: 2 })

    cy.get('[ng-model="selectedEmployee.firstName"]').invoke('val').should('equal', employee.firstName)
    cy.get('[ng-model="selectedEmployee.lastName"]').invoke('val').should('equal', employee.lastName)
    cy.get('[ng-model="selectedEmployee.email"]').invoke('val').should('equal', employee.email)
    cy.get('[ng-model="selectedEmployee.startDate"]').invoke('val').should('equal', employee.startDate)
    
    cy.contains('Update').should('be.visible')
    cy.contains('Back').should('be.visible')

    // delete employee
    cy.contains('Delete').should('be.visible').click()
    cy.get(employee.firstName).should('not.exist')
  })
})