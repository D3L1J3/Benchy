/// <reference types = "Cypress" />

import WelcomePage from "../pageObjects/welcomePage"
import CreateAccountPage from "../pageObjects/createAccountPage"
import SetUpManagerProfilePage from "../pageObjects/setUpManagerProfilePage"

describe("createConsultant", () => {

    it("Create new account", () => {

        cy.visit("https://benchy.se/auth/welcome")

        const manName   =   Math.floor(Math.random() * 1000000) + 100000
        // Returns a random integer from 1 to 999999:
        const orgNum    =   manName
        const fullName  =   "auto1"
        const email     =   manName + "@gmail.com"
        const pwd       =   "auto"
        const address1  =   "auto"
        const address2  =   "auto"
        const city      =   "auto"
        const zip       =   "auto"
        const country   =   "auto"

        //Welcome page
        const welcomePage = new WelcomePage() 

        //Select ConsultantManager and proceed
        welcomePage.getConstultantButton().click()
        welcomePage.getCreateAccountButton().click()

        //Create account
        const createAccountPage = new CreateAccountPage()

        //Fill in form with required data
        createAccountPage.getConsultantName().type(manName)
        createAccountPage.getOrgNumber().type(orgNum)
        createAccountPage.getName().type(fullName)
        createAccountPage.getEmail().type(email)
        createAccountPage.getConfirmEmail().type(email)
        createAccountPage.getPassword().type(pwd)
        createAccountPage.getConfirmPassword().type(pwd)
        createAccountPage.getAddressLine1().type(address1)
        createAccountPage.getAddressLine2().type(address2)
        createAccountPage.getCity().type(city)
        createAccountPage.getZipCode().type(zip)
        createAccountPage.getCountry().type(country)
        
        //check terms and conditions box and create account
        createAccountPage.getTermsAndConditionCheckBox().check()
        createAccountPage.getCreateAccountButton().click()
    })
})
