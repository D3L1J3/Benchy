class setUpManagerProfilePage 
{    
    getUploadProfilePictureButton(){
        return cy.get('.css-v6yg99 > .MuiButton-contained')
    }
    
    getUploadCoverPictureButton(){
        return cy.get('.css-7vl27o > .MuiButton-contained')
    }

    getDescriptionTextBox(){
        return cy.get('#manager_description')
    }

    getCompleteYourProfileButton(){
        return cy.get('.css-1eerxkg > .MuiButton-contained')
    }
}
export default setUpManagerProfilePage