class managerProfilePage 
{    
    getCreateConsultantButton(){
        return   cy.get('.css-wb52eg > [href="/manager/consultant/upload-cv"] > .MuiButtonBase-root')
    }
}
export default managerProfilePage