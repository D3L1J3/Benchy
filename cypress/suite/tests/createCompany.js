/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 
// npm install -D cypress-xpath

describe("Test company creation", () => {
    it("Should be able to submit a successful submission creating a company form", () => {
        // Returns a random integer from 1 to 999999:
        const ranInt   =   Math.floor(Math.random() * 1000000) + 100000;
        
        const orgNum    =   ranInt;
        const fullName  =   "compName";
        const email     =   ranInt + "@gmail.com";
        const pwd       =   "compPwd1";
        const address  =   "compAddress";
        const city      =   "compCity";
        const zip       =   "compZip";
        const country   =   "compCountry";
        const companyDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing magna aliqua";

        cy.visit('https://benchy.se/auth/welcome');
        cy.xpath("//img[@alt='Company']").click();
        cy.contains('Create account').click();
        cy.get('#company_name').type(ranInt);
        cy.get('#org_number').type(orgNum);
        cy.get('#name').type(fullName);
        cy.get('#email').type(email);
        cy.get('#confirmEmail').type(email);
        cy.get('#password').type(pwd);
        cy.get('#confirmPassword').type(pwd);
        cy.get('#address_line').type(address);
        cy.get('#address_line_2').type(address);
        cy.get('#city').type(city);
        cy.get('#zip_code').type(zip);
        cy.get('#country').type(country);
        cy.get('#agreement').click();
        cy.xpath("//button[contains(text(), 'Create account')]").click();
        cy.url().should('include', '/company/setup-profile');
        cy.contains('Set up company profile');

        // // Adds a profile picture and verify that it is uploaded
        cy.xpath("//label[@role='button']").first().selectFile('cypress/fixtures/pictures/profilePic.png');
        cy.request('*.png')
            .its('status')
            .should('equal', 200);
        cy.xpath("//img[@alt='Profile picture']").should('be.visible');

        // Adds company description and clicks the "Complete your profile" button
        cy.get('#company_description').type(companyDesc);   
        cy.xpath("//button[contains(text(), 'Complete your profile')]").click();
        cy.url().should('include', '/company/home');
    });
})


