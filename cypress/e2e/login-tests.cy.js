
import homePageSpec from "../pages/home-page.spec"
import locationPage from "../pages/location-page"
import loginPageSpec from "../pages/login-page.spec"

const MAIN_URLS = require('../fixtures/mainURLs.json')

describe('Test Login', ()=>{
    beforeEach(()=>{
      cy.visit('https://www.wework.com/')
      homePageSpec.acceptCookiesButton().click()
    })
    
    
  MAIN_URLS.forEach(url => {
    it(url.name+': '+url.url, ()=>{
      cy.request(url.url)
    })
  })


  it.skip('common pages', ()=>{
    const pages = ['/','/search', '/solutions','/enterprise','/ideas','/contact-us','/solutions/dedicated-desk','/solutions/office-suite','/solutions/full-floor-office','/solutions/wework-all-access',
    '/solutions/events','/enterprise#contact-us','/solutions/standard-office']
    pages.forEach(page => {
      cy.request(page)
    })
  })

  it('Find workspace in dropdown is present',()=>{
    homePageSpec.findWorkspaceDropdown().should('be.visible')
  })

  it('Browse by workspace is present',()=>{
    homePageSpec.browseByWorkspace().should('have.length',4)
    homePageSpec.browseByWorkspace().contains('Office space').should('be.visible')
    homePageSpec.browseByWorkspace().contains('Dedicated desk').should('be.visible')
    homePageSpec.browseByWorkspace().contains('Hot desk').should('be.visible')
    homePageSpec.browseByWorkspace().contains('Meeting room').should('be.visible')
  })

  it('Main menu is visible',()=>{
    homePageSpec.locationButton().should('be.visible')
    homePageSpec.solutionsButton().should('be.visible')
    homePageSpec.enterpriceButton().should('be.visible')
    homePageSpec.ideasButton().should('be.visible')
    homePageSpec.contactUsButton().should('be.visible')
    homePageSpec.loginButton().should('be.visible')
  })


  it.skip('all pages', ()=>{
    cy.visit('https://www.wework.com/')

    cy.get("a:not([href*='mailto:']):not([href*='tel']):not([href*='linkedin']):not([href*='/l/'])").each(page => {
      var url = page.prop('href')
      cy.log(url)
      if(url !== '' && url !== undefined)
        cy.request(url)
    })

})

//pending
it('Success Login', ()=>{
        
  homePageSpec.loginButton().click()
  loginPageSpec.summitLogin('yshat149+dfre51@gmail.com','JuliyaVas1')
})

it.skip('locations', ()=>{
  //cy.visit('https://www-staging.wework.com/', fakeLocation(40.730610, -73.935242))
  cy.visit("https://www.wework.com/", mockLocation(35.172744,137.05802));
  //cy.visitWithCustomGeoLoc("https://www-staging.wework.com/", 40.730610, -73.935242);
  homePageSpec.acceptCookiesButton().click()
  //cy.mockGeolocation();
  homePageSpec.locationButton().click()
  //locationPage.seearchLocation('New York City, New York 10020','Museum of Modern Art','430 Park Avenue')
  
})

      
})