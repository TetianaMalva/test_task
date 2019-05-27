/// <reference types="Cypress" />

import Employee from '../data/employee'

describe('As a user, I can change data of employee', function () {

  let employee
  let newFirstName

  beforeEach('login', () => {
    cy.login()
    // test data setup
    employee = new Employee("Name" + new Date().getTime(), "LastName", "2019-01-01", "email@test.com")
    newFirstName = 'Edited' + employee.firstName
    cy.addEmployee(employee)
  })

  it('edit a new created employee', function () {

    // edit data of a new employee
    cy.contains(employee.firstName).click()
    cy.contains('Edit').click()

    cy.get('[ng-model="selectedEmployee.firstName"]').focus().clear().type(newFirstName)
    cy.contains('Update').click()

    // verify employee with previous name doesn't exist
    cy.contains(employee.firstName).should('be.not.visible')
    // verify that edited employee exist
    cy.contains(newFirstName).should('be.visible')
  })

  afterEach('deleteEmployee', () => {
    cy.deleteEmployee(newFirstName)
  })
})