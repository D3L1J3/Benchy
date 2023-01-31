class loginPage 
{    
    getEmail(){
        return cy.get('#email')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('form > .MuiButton-root')
    }
}
export default loginPage