/// <reference types = "Cypress" />
import WelcomePage from "../pageObjects/welcomePage"
import CreateAccountPage from "../pageObjects/createAccountPage"
import UploadCvPage from "../pageObjects/uploadCvPage"

describe("createConsultant", function () {

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
         const manName = Date.now()

        //Welcome page
        const welcomePage = new WelcomePage() 

        //Select Consultant and proceed
        welcomePage.getConsultantButton().click()
        welcomePage.getCreateAccountButton().click()

        //Create account
        const createAccountPage = new CreateAccountPage()

        //Fill in form with required data
        createAccountPage.getConsultantName().type(manName)
        createAccountPage.getEmail().type(manName + this.data.email)
        createAccountPage.getConfirmEmail().type(manName + this.data.email)
        createAccountPage.getPassword().type(this.data.pwd)
        createAccountPage.getConfirmPassword().type(this.data.pwd)
        
        //check terms and conditions box and create account
        createAccountPage.getTermsAndConditionCheckBox().check()
        createAccountPage.getCreateAccountButton().click()

        
         //Upload Cv page
        const uploadCvPage = new UploadCvPage()
        
        //Upload a cv to populate a profile
        uploadCvPage.getCvUploadWindow().selectFile('cypress/fixtures/documents/lukasOldResume.pdf')

        //Wait for page to process uploaded pdf
        cy.wait(15000)

        //Use a custom email to not have duplicates in the DB
        // uploadCvPage.getEmailOne().type(Date.now()+"@gmail.com")
        uploadCvPage.getConfirmButton().click()

        //Skip Uploading CV
        //uploadCvPage.getSkipButton().click()
        

    })
})
