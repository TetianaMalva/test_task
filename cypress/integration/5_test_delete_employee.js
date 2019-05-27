/// <reference types="Cypress" />

import Employee from '../data/employee'

describe('As a user, I can delete an employee', function () {

  let employee

  beforeEach('login', () => {
    // test data setup
    employee = new Employee("Name" + new Date().getTime(), "LastName", "2019-01-01", "email@test.com")
    cy.login()
    cy.addEmployee(employee)
  })

  it('delete an employee', function () {

    cy.contains(employee.firstName).should('be.visible').click()
    cy.contains('Delete').click()
    cy.get(employee.firstName).should('not.exist')
  })
})