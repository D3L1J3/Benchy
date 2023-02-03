class welcomePage 
{    
    getConstultantManagerButton(){
        return cy.get('.css-twaf9d > :nth-child(3)')
    }

    getCreateAccountButton(){
        return cy.get('.css-78jar2 > .MuiButton-root')
    }

    getConsultantButton(){
        return cy.get('.css-twaf9d > :nth-child(2)')
    }

    getLoginButton(){
        return cy.get('a > .MuiButtonBase-root')

    }
}
export default welcomePage