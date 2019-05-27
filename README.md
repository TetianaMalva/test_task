# Description

This project contains E2E tests of [CafeTownsend-Angular-Rails](http://cafetownsend-angular-rails.herokuapp.com/) web application.

## Scope

This demo has E2E tests selection covering only positive sanity checks.

### Explanation of test coverage
 
- Test technique: Use cases

- Test level: System

- Test type: Functional

As time was limited the decision has been made to write use cases covering positive scenarios. An assumption was made that the listed set of features has the highest priority:
1. As a user, I can login to the application
2. As a user I can view a list of employees, by double-clicking I can see the details of each employee
3. As a user, I can add an employee to the list
4. As a user, I can change data of employee
5. As a user, I can delete an employee
6. As a user, I can log out

## Tools
 - Language: JavaScript
 - Test framework: [cypress.io](https://www.cypress.io/)
 - IDE (recommended): [Visual Studio Code](https://code.visualstudio.com/download)

### Test framework selection reasoning

Cypress Pros:
1. Easy to start (very good documentation)
2. Familiar with this tool
3. Open source, big community
4. Quick test execution
5. Covers required functionality
6. Has many advanced features to cover more complicated tests in the future

Cypress Cons:
1. Runs only in Chrome

## Installation and execution

### Install prerequisites

  1. Install git
  [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  
  2. Install docker
  [https://docs.docker.com/install/](https://docs.docker.com/install/)

### Run tests

1. Clone this git repository:
  ```bash
  mkdir ~/gitrepo
  cd ~/gitrepo
  git clone https://github.com/TetianaMalva/test_task.git
  ```

2. Run in docker:

```bash
cd ~/gitrepo/test_task/
docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO cypress/included:3.2.0
```

Example of test result:

![alt text](https://raw.githubusercontent.com/TetianaMalva/test_task/master/wiki/result_cypress_run.png)

#### Execution with Test Runner (optional) [https://docs.cypress.io/guides/core-concepts/test-runner.html](https://docs.cypress.io/guides/core-concepts/test-runner.html)

Next example recorded with Test Runner for better visual presentation of tests execution:

![alt text](https://raw.githubusercontent.com/TetianaMalva/test_task/master/wiki/result_cypress_open.gif)

## What was not tested

Due to time limitation and lack of knowledge of user/business needs.

* Unit testing
* Integration testing
* API testing
* Cross-browser testing
* Performance testing 
* Security testing
* Negative scenario testing
* Input fields validation
* UAT
* Exploratory testing