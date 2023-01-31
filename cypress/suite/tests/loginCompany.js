/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 
// npm install -D cypress-xpath c

describe("Test company login", () => {
    it("Should be able to login to a company account", () => {
        cy.visit('https://benchy.se/auth/welcome')
        cy.xpath("//a[@href='/auth/login']/button[@type='button']").click();
        cy.url().should('include', '/auth/login');
        // login credentials hard coded for now
        cy.get('#email').type('fredrikgarpe@hotmail.com');
        cy.get('#password').type('testing123');
        cy.xpath("//button[contains(text(), 'Sign in')]").click();
        cy.url().should('include', '/company/home');
        
        // Find consultants
        cy.contains('Find Consultants').click();
        cy.url().should('include', '/company/consultant-listings');
        cy.xpath("//input[@id='tags-outlined']").first().click();
        cy.contains('JavaScript (Programming Language)').click();
        cy.xpath("//button[@type='submit']").click();
        cy.contains(/Here are \d+ consultants/);
        cy.xpath("//img[@alt='Applicant']").should('be.visible');
    });
})


