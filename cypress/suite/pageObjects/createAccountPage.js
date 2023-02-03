class createAccountPage 
{    
    getConsultantName(){
        return cy.get('#username')
    }
    
    getManagerName(){
        return cy.get('#manager_name')
    }

    getOrgNumber(){
        return cy.get('#org_number')
    }

    getName(){
        return cy.get('#name')
    }

    getEmail(){
        return cy.get('#email')
    }

    getConfirmEmail(){
        return cy.get('#confirmEmail')
    }

    getPassword(){
        return cy.get('#password')
    }

    getConfirmPassword(){
        return cy.get('#confirmPassword')
    }

    getAddressLine1(){
        return cy.get('#address_line')
    }

    getAddressLine2(){
        return cy.get('#address_line_2')
    }

    getCity(){
        return cy.get('#city')
    }

    getZipCode(){
        return cy.get('#zip_code')
    }

    getCountry(){
        return cy.get('#country')
    }

    getTermsAndConditionCheckBox(){
        return cy.get('.PrivateSwitchBase-input')
    }
    
    getCreateAccountButton(){
        return cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    }
}
export default createAccountPage