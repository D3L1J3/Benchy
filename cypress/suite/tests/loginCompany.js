/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 
// npm install -D cypress-xpath

describe("Test company login", () => {
    it("Should be able to login to a company account", () => {
        cy.visit('https://benchy.se/auth/welcome');
        cy.get('.CookieConsent').invoke('hide'); // hide cookie text
        cy.xpath("//button[contains(text(), 'Log in')]").click();
        cy.url().should('include', '/auth/login');
        cy.get('#email').type('768468@gmail.com');
        cy.get('#password').type('compPwd1');
        cy.xpath("//button[contains(text(), 'Log in')]").last().click();

        // Verify url and profile image
        cy.url().should('include', '/company/home'); 
        cy.xpath("//img[@alt='logo']").should('be.visible');

        // Find consultants and verifies that match exists
        cy.get('#rcc-confirm-button').click({force:true}); // Accept cookies
        cy.contains('Find Consultants').click();
        cy.url().should('include', '/company/consultant-listings');
        cy.xpath("//input[@id='tags-outlined']").first().click().type("JIRA");
        cy.contains('JIRA').click();
        cy.xpath("//button[contains(text(), 'Search')]").click();
        cy.contains(/Here are \d+ consultants/);
        cy.xpath("//img[@alt='Applicant']").should('be.visible');
    });
})


