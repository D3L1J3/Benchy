class uploadCvPage 
{    
    getCvUploadWindow(){
        return cy.get('.dzu-inputLabel')
    }
    getEmail(){
        return cy.get('#email')
    }
    getConfirmButton(){
        return cy.get('.MuiBox-root > .MuiButtonBase-root')
    }
}
export default uploadCvPage