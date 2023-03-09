/// <reference types = "Cypress" />
import WelcomePage from "../pageObjects/welcomePage"
import LoginPage from "../pageObjects/loginPage"

describe("createConsultantManager", function () {

  //pre test hook for dynamic datatable
  this.beforeEach(function () {
    cy.fixture('url').then(function (url) {
      this.url = url
    })
    cy.fixture('consultantManager').then(function (data) {
      this.data = data
    })
  })

it("Create new account", function () {
  cy.visit(this.url.BenchyWelcomePage)

  //Welcome page
  const welcomePage = new WelcomePage()  

  //Select login option
  cy.get('#rcc-confirm-button').click({force:true}); // Accept cookies
  welcomePage.getLoginButton().click()

  //Login page
  const loginPage = new LoginPage()

  //Use pre-configured account and login
  loginPage.getEmail().type(this.data.email)
  loginPage.getPassword().type(this.data.password)
  loginPage.getLoginButton().click()
  cy.url().should('include', '/manager/home'); 
  cy.xpath("//img[@alt='logo']").should('be.visible');
  })
})