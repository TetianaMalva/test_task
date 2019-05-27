/// <reference types="Cypress" />

import Employee from '../data/employee'

describe('As a user, I can add an employee to the list', function () {

  let employee

  beforeEach('login', () => {
    cy.login()
    // test data setup
    employee = new Employee("Name" + new Date().getTime(), "LastName", "2019-01-01", "email@test.com")
  })

  it('create a new employee', function () {

    // click 'Create' button
    cy.get("[ng-click='createEmployee()']").click()
    cy.url().should('include', '/employees/new')
    cy.get('[ng-model="selectedEmployee.firstName"]').focus().type(employee.firstName)
    cy.get('[ng-model="selectedEmployee.lastName"]').focus().type(employee.lastName)
    cy.get('[ng-model="selectedEmployee.startDate"]').focus().type(employee.startDate)
    cy.get('[ng-model="selectedEmployee.email"]').focus().type(employee.email)
    // click 'Add' button
    cy.get('.formFooter > [ng-show="isCreateForm"]').click()
    cy.contains(employee.firstName).should('be.visible')
  })

  afterEach('deleteEmployee', () => {
    cy.deleteEmployee(employee.firstName)
  })
})