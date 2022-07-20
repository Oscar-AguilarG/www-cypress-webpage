class LoginPage{
    constructor(){
        this.emailField = ()=> cy.get('#1-email')
        this.passwordField = ()=> cy.get('#1-password')
        this.continueButton = ()=> cy.get('#1-submit')

        //Inactive section
        this.errorPermissionSection = ()=> cy.get('.error-permissions-v1')
        this.accessDeniedHeader = ()=> cy.get('.ray-text--h1')
        this.accessDeniedText = ()=> cy.get('.ray-text--body-large')
        this.logoutButton = ()=> cy.get('.error-permissions-v1__logout-button')
    }

    summitLogin(email, password){
        this.emailField().type(email)
        this.passwordField().type(password)
        this.continueButton().click()
    }
}

export default new LoginPage