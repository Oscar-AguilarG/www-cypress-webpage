import checkoutPage from "../pages/checkout-page"
import homePage from "../pages/home-page"

describe('Checkout Tests ', ()=>{
    it('Standar All Access',()=>{

        const quantity = '2'
        cy.visit('https://www.wework.com/signup?plan_ref=standard_all_access&override_treatments=redirectToSpacemoney=2')
        checkoutPage.selectPrimaryLocation('United States','New York City','110 Wall St')
        homePage.acceptCookiesButton().click()
        checkoutPage.quantityDropdown().select(quantity,{force:true})
        checkoutPage.quantityLabel().contains(quantity)
        checkoutPage.continueToChecoutButton().click()
        //homePage.acceptCookiesButton().click()
        checkoutPage.fillCreateNewAccount('Tester123', 'wework', 'wework@wework.com', '1234567890', 'pass123', 'pass123')
    })
})