/// <reference types = "Cypress" />
import WelcomePage from "../pageObjects/welcomePage"
import LoginPage from "../pageObjects/loginPage"
import ManagerProfilePage from "../pageObjects/managerProfilePage"
import UploadCvPage from "../pageObjects/uploadCvPage"

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
  cy.get('#rcc-confirm-button').click({force:true}); // Accept cookies

  //Select login option
  welcomePage.getLoginButton().click()

  //Login page
  const loginPage = new LoginPage()

  //Use pre-configured account and login
  loginPage.getEmail().type(this.data.email)
  loginPage.getPassword().type(this.data.password)
  loginPage.getLoginButton().click()

  //Manager profile page
  const managerProfilePage = new ManagerProfilePage()

  //Click to add new consultant to manager profile
  managerProfilePage.getCreateConsultantButton().click()

  //Upload Cv page
  const uploadCvPage = new UploadCvPage()
  
  //Upload a cv to populate a profile
  uploadCvPage.getCvUploadWindow().selectFile('cypress/fixtures/documents/lukasOldResume.pdf')

  //Wait for page to process uploaded pdf
  cy.wait(15000)

  //Use a custom email to not have duplicates in the DB
  uploadCvPage.getEmail().type(Date.now()+"@gmail.com")
  uploadCvPage.getConfirmButton().last().click()
  })
})