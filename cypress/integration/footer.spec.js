import footerPage from "../pages/footer-page"
import homePage from "../pages/home-page"

describe('validate elements footer', { tags:'@DemoSuite'} ,() => {
    beforeEach(() => {
      cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
      homePage.acceptCookies()
    })
    it('footer element is visible',  () => {

        //menu heading company
        footerPage.globalLocationsLink().contains('Company').should('be.visible')
        footerPage.globalLocationsLink().contains('Global Locations').should('be.visible')
        footerPage.globalLocationsLink().contains('Mission').should('be.visible')
        footerPage.globalLocationsLink().contains('Inclusion & Diversity').should('be.visible')
        footerPage.globalLocationsLink().contains('Careers').should('be.visible')
        footerPage.globalLocationsLink().contains('Investors').should('be.visible')
        footerPage.globalLocationsLink().contains('Newsroom').should('be.visible')
        //menu heading partnerships
        footerPage.globalLocationsLink().contains('Partnerships').should('be.visible')
        footerPage.globalLocationsLink().contains('Brokers').should('be.visible')
        footerPage.globalLocationsLink().contains('Landlords').should('be.visible')
        footerPage.globalLocationsLink().contains('Refer a Friend').should('be.visible')
        footerPage.globalLocationsLink().contains('Event Planners').should('be.visible')
        //menu heading  impact
        footerPage.globalLocationsLink().contains('Impact').should('be.visible')
        footerPage.globalLocationsLink().contains('Purpose').should('be.visible')
        footerPage.globalLocationsLink().contains('Veterans in Residence').should('be.visible')
        //menu heading  support
        footerPage.globalLocationsLink().contains('Support').should('be.visible')
        footerPage.globalLocationsLink().contains('COVID Response').should('be.visible')
        footerPage.globalLocationsLink().contains('FAQ').should('be.visible')
        footerPage.globalLocationsLink().contains('Contact Us ').should('be.visible')
        //menu footer social media
        footerPage.socialMediaFooter().should('have.length', 1)
        footerPage.socialMediaIconFacebook().should('be.visible')
        footerPage.socialMediaIconInstagram().should('be.visible')
        footerPage.socialMediaIconTwitter().should('be.visible')
        footerPage.socialMediaIconLinkedin().should('be.visible')
        //link All Locations
        footerPage.allLocationLink().should('be.visible')
        //link page footer legal menus
        footerPage.pageFooterLegalMenuItem().contains('Privacy').should('be.visible')
        footerPage.pageFooterLegalMenuItem ().contains('Terms').should('be.visible')
        footerPage.pageFooterLegalMenuItem().contains('Cookies Policy').should('be.visible')
        footerPage.pageFooterLegalMenuItem().contains('Cookies Settings').should('be.visible')
        footerPage.pageFooterLegalMenuItem().contains('Accessibility').should('be.visible')
        footerPage.pageFooterLegalMenuItem().contains('Sitemap').should('be.visible')

      }) 
describe('Footer Verify redirect links ', { tags:'@DemoSuite'} , () => {
  beforeEach(() => {
    cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
    homePage.acceptCookies()
  })
  it('Checking redirect global privacy ', () => {
    homePage.acceptCookies()
        footerPage.pageFooterLegalMenuItem().contains('Privacy').click().url().should('include', 'global-privacy-policy')
      })
        it('Checking redirect terms of service ', () => {
          footerPage.pageFooterLegalMenuItem().contains('Terms').click().url().should('include', 'terms-of-service')
        })
        it('Checking redirect cookie policy ', () => {
          footerPage.pageFooterLegalMenuItem().contains('Cookies Policy').click().url().should('include', 'cookie-policy')
        })
        it('Checking redirect sitemap ', () => {
          footerPage.pageFooterLegalMenuItem().contains('Sitemap').click().url().should('include', 'sitemap')
        })
        it('Checking redirect accessibility ', () => {
          footerPage.pageFooterLegalMenuItem().contains('Accessibility').click().url().should('include','accessibility')
        })   
      })
})
