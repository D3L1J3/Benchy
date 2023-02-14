/// <reference types = "Cypress" />
import WelcomePage from "../pageObjects/welcomePage"
import CreateAccountPage from "../pageObjects/createAccountPage"
import SetUpManagerProfilePage from "../pageObjects/setUpManagerProfilePage"

describe("createConsultantManager", function () {

  //pre test hook for dynamic datatable
  this.beforeEach(function () {
    cy.fixture('url').then(function (url) {
      this.url = url
    })
    cy.fixture('accountData').then(function (data) {
      this.data = data
    })
  })

it("Create new account", function () {
  cy.visit(this.url.BenchyWelcomePage)

  //ini unique login value
  const manOrgName = Date.now()

  //Welcome page
  const welcomePage = new WelcomePage()  

  //Select ConsultantManager and proceed
  welcomePage.getConstultantManagerButton().click()
  welcomePage.getCreateAccountButton().click()  

  //Create account
  const createAccountPage = new CreateAccountPage() 

  //Fill in form with required data
  createAccountPage.getManagerName().type(manOrgName)
  createAccountPage.getOrgNumber().type(manOrgName)
  createAccountPage.getEmail().type(manOrgName + this.data.email)
  createAccountPage.getConfirmEmail().type(manOrgName + this.data.email)
  createAccountPage.getPassword().type(this.data.pwd)
  createAccountPage.getConfirmPassword().type(this.data.pwd)
  createAccountPage.getAddressLine1().type(this.data.address1)
  createAccountPage.getAddressLine2().type(this.data.address2)
  createAccountPage.getCity().type(this.data.city)
  createAccountPage.getZipCode().type(this.data.zip)
  createAccountPage.getCountry().type(this.data.country)

  //check terms and conditions box and create account
  createAccountPage.getTermsAndConditionCheckBox().check()
  createAccountPage.getCreateAccountButton().click()  

  //Set up manager profile
  const setUpManagerProfilePage = new SetUpManagerProfilePage() 

  //upload pictures
  setUpManagerProfilePage.getUploadProfilePictureButton().selectFile('cypress/fixtures/pictures/profilePic.png')
  setUpManagerProfilePage.getUploadCoverPictureButton().selectFile('cypress/fixtures/pictures/coverPic.png')  

  //fill in some description and complete profile
  setUpManagerProfilePage.getDescriptionTextBox().type(this.data.descriptionText)
  setUpManagerProfilePage.getCompleteYourProfileButton().click()
  })
})