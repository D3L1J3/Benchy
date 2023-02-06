class uploadCvPage 
{    
    getCvUploadWindow(){
        return cy.get('.dzu-inputLabel')
    }
    getEmail(){
        return cy.get('#email')
    }
    getEmailOne(){
        return cy.get('#emails\[0\]')
    }
    getConfirmButton(){
        return cy.get('.MuiBox-root > .MuiButtonBase-root')
    }
    getSkipButton(){
        return cy.get('.css-1l4w6pd > .MuiTypography-root')
    }
}
export default uploadCvPage