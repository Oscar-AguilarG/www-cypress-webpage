import solutionsPage from "../pages/solutions-page"
import homePage from "../pages/home-page"
import footerPage from "../pages/footer-page"

const LANGUAGES = require('../fixtures/solutionsLanguages.json')


describe('Verify the functionality of solutions page', () => {
  beforeEach(() => {
    cy.visit('https://www.wework.com/')
    homePage.solutionsButton().click()
    homePage.acceptCookies();
  })
  it('Verify Elements',{tags:'@DemoSuite'}, () => {
    cy.title().should('eq', 'Office Space for Rent - Pricing & Membership Plans | WeWork')

    // Dedicated Space Module check
    solutionsPage.dedicatedSpaceModule().should('be.visible')
    solutionsPage.dedicatedDeskElement().should('be.visible')
    solutionsPage.privateOfficeElement().should('be.visible')
    solutionsPage.officeSuiteElement().should('be.visible')
    solutionsPage.fullFloorElement().should('be.visible')
    // Monthly Subscription Module check
    solutionsPage.monthlySubscriptionModule().should('be.visible')
    solutionsPage.allAccessElement().should('be.visible')
    // Event and Production Module check
    solutionsPage.eventAndProductionModule().should('be.visible')
    // Meet our Clients Module check
    solutionsPage.meetOurClientsModule().should('be.visible');

  })
})

  // it('Verify Load on different locale', () => {})
LANGUAGES.forEach(language => {
  
  describe("Verify Language Selection on solutions page",{tags:'@DemoSuite'}, () =>{

    beforeEach(() => {
      cy.visit('https://www.wework.com/')
      homePage.solutionsButton().click()
      homePage.acceptCookies();
    })

    it('Verify language change on hyperlinks', () => {
      footerPage.languageFooter().click()
      footerPage.languageOptions(language.code).click()
      

    })


  }) 
})
