// Custom command - login in application
Cypress.Commands.add("login", () => {
    cy.visit('/')
    cy.get('[ng-model="user.name"]').type("Luke")
    cy.get('[ng-model="user.password"]').type("Skywalker")
    // click "Login" button
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/employees')
})

// Custom command - add a new employee
Cypress.Commands.add("addEmployee", (employee) => {
    cy.get("[ng-click='createEmployee()']").click()
    cy.url().should('include', '/employees/new')
    cy.get('[ng-model="selectedEmployee.firstName"]').focus().type(employee.firstName)
    cy.get('[ng-model="selectedEmployee.lastName"]').focus().type(employee.lastName)
    cy.get('[ng-model="selectedEmployee.startDate"]').focus().type(employee.startDate)
    cy.get('[ng-model="selectedEmployee.email"]').focus().type(employee.email)
    // click "Add" button
    cy.get('.formFooter > [ng-show="isCreateForm"]').click()
    cy.url().should('include', '/employees')
})

// Custom command - delete employee
Cypress.Commands.add("deleteEmployee", (employeeFirstName) => {
    cy.contains(employeeFirstName).should('be.visible').click()
    cy.contains('Delete').click()
    cy.get(employeeFirstName).should('not.exist')
})