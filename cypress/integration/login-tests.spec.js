
import homePage from "../pages/home-page"
import locationPage from "../pages/location-page"
import loginPage from "../pages/login-page"

describe('Test Login', ()=>{
    beforeEach(()=>{
      cy.visit('https://www.wework.com/')
      homePage.acceptCookies()
    })


it('Success Login with inactive user ',{ tags:'@DemoSuite'}, ()=>{      
  homePage.loginButton().click()
  loginPage.summitLogin('yshat149+2@gmail.com','JuliyaVas1')
  loginPage.errorPermissionSection().should('be.visible')
  loginPage.accessDeniedHeader().should('contain.text','Access denied')
  loginPage.accessDeniedText().should('contain.text','Your membership with WeWork is no longer active.')
  loginPage.logoutButton().click()
  loginPage.emailField().should('be.visible')
})
      
})