import buildingPage from "../pages/building-page"
import homePage from "../pages/home-page"
import locationPage from "../pages/location-page"


const HOUSTON={
    VALUE:'521b1102-2bbb-11e7-8ac0-0a636a339cd2',
    URL:'/l/houston--TX'
}
const LANGUAGES = require('../fixtures/searchLanguages.json')

LANGUAGES.forEach(language => {
    describe('All elements load correctly in '+language.name,{ tags:'@DemoSuite'}, ()=>{
        it('go to search page - '+language.name, ()=> {
            const url = 'https://www.wework.com'+language.code+'/search'+language.city_code
            cy.visit(url)
            //homePage.acceptCookiesButton().click()
            //homePage.findWorkspaceIn(HOUSTON)
        })

        it('Search workspace elements', ()=> {
            locationPage.searchInput().should('be.visible')
            locationPage.workspaceTypeDropbox().contains(language.workspace_type).should('be.visible')
            locationPage.workspaceCapacity().should('be.visible')
            locationPage.moveInButton().contains(language.move_in).should('be.visible')
            locationPage.filterMessage().contains(language.filter_message).should('be.visible')
            locationPage.buildingCount().contains(language.building_count).should('be.visible')
        })

        it('Build elements', ()=> {
            locationPage.buildingsCardImage().should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
            locationPage.buildingsCardName().should('be.visible')
            locationPage.buildingsCardMarket().should('be.visible')
            locationPage.buildingsCardAmenities().should('be.visible')
        })    

        it('Get in touch elements', ()=> {
            locationPage.getInTouchContainer().contains(language.get_in_touch_container).should('be.visible')
            locationPage.getInTouchButton().contains(language.get_in_touch_button).should('be.visible')

        })


    })
})

describe('search page',()=>{
    it('Language selected language remains after open search page',{tags:'@DemoSuite'},()=>{
        cy.visit('www.wework.com/es-LA')
        //homePage.findLocationButton().click()
        homePage.acceptCookies()
        homePage.locationButton().click()
        //homePage.goToSearchPage()
        cy.url().should('include', '/es-LA/search')
    })

    it('Search field works correctly',{tags:'@DemoSuite'},()=>{
        cy.visit('www.wework.com/')
        //homePage.acceptCookiesButton().click()
        //homePage.findLocationButton().click()
        homePage.locationButton().click()
        locationPage.waitForRequest('waitPageLoad')
        locationPage.seearchLocation('New York','New York City, New York','16 E 34th St')
        locationPage.waitForRequest('waitBuildLoad')
        locationPage.buildingList().contains('16 E 34th St').click()
        buildingPage.buildingTitle().contains('16 E 34th St')

    })

    it('Verify Move In and Capacity filters',{tags:'@DemoSuite'}, ()=>{

        cy.visit('https://www.wework.com/search')
        locationPage.waitForRequest('waitPageLoad')
        locationPage.seearchLocation('New York','New York City, New York','16 E 34th St')
        locationPage.waitForRequest('waitBuildLoad')
        locationPage.moveInButton().click()
        //locationPage.calendarDate('July 22, 2022').click()
        locationPage.calendarToday().click()
        locationPage.moveInButton().should('contain.text',new Date().getDate())
        locationPage.workspaceCapacity().click()
        locationPage.caoacityOptions('5').click()
        locationPage.waitForRequest('waitForCapacity')
        locationPage.workspaceCapacity().should('contain.text','5')
        locationPage.buildingCount().invoke('attr','data-count').then(value =>{
            expect(parseInt(value)).to.be.greaterThan(1)
        })
        
    })

    it('Verify Workspace type filter',{tags:'@DemoSuite'}, ()=>{
        cy.visit('https://www.wework.com/search')
        locationPage.waitForRequest('waitPageLoad')
        locationPage.seearchLocation('New York','New York City, New York','16 E 34th St')
        locationPage.waitForRequest('waitBuildLoad')
        locationPage.moveInButton().click()
        locationPage.calendarToday().click()
        locationPage.workspaceCapacity().click()
        locationPage.caoacityOptions('1').click()
        locationPage.workspaceTypeDropbox().click()
        locationPage.officeSpace().click()
        locationPage.waitForRequest('waitForWStype')
        locationPage.workspaceTypeDropbox().should('contain.text','Office space')
        locationPage.productDescription().first().should('contain.text','Private Offices')


    })
})
