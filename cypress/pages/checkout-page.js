class CheckoutPage{
    constructor(){
        //Primary Location
        this.countryDropdown = ()=> cy.get('#countries')
        this.cityDropdown = ()=> cy.get('#markets')
        this.buildingList = ()=> cy.get('.building-card')

        //Your Cart
        this.continueToChecoutButton= ()=> cy.get('.checkout-button--full')
        this.quantityDropdown = ()=> cy.get('#quantity-dropdown-element')
        this.quantityLabel = ()=> cy.get('.order-detail-amount-inline').eq(1)

        //Create new account
        this.fullNameField = ()=> cy.get('input[data-testid="field-fullName"]')
        this.companyNameField = ()=> cy.get('input[data-testid="field-companyName"]')
        this.emailField = ()=> cy.get('input[data-testid="field-emailAddress"]')
        this.phoneNumberField = ()=> cy.get('#phoneNumber')
        this.passwordField = ()=> cy.get('input[data-testid="field-password"]')
        this.confirmPasswordField = ()=> cy.get('input[data-testid="field-confirmPassword"]')
        this.proceedToPaymentButton = ()=> cy.get('.checkout-form__button--full-sized') 
    }

    selectPrimaryLocation(country, city, building){
       this.countryDropdown().select(country)
       this.cityDropdown().select(city)
       this.buildingList().contains(building).click()
       
    }

    fillCreateNewAccount(fullName, companyName, email, phone, password, confirmPassword){
        this.fullNameField().type(fullName,{force:true})
        this.companyNameField().type(companyName,{force:true})
        this.emailField().type(email,{force:true})
        this.phoneNumberField().type(phone,{force:true})
        this.passwordField().type(password,{force:true})
        this.confirmPasswordField().type(confirmPassword,{force:true})
    }
}

export default new CheckoutPage