import buildingPage from "../pages/building-page"
import homePageSpec from "../pages/home-page.spec"
import locationPage from "../pages/location-page"


const HOUSTON={
    VALUE:'521b1102-2bbb-11e7-8ac0-0a636a339cd2',
    URL:'/l/houston--TX'
}
const LANGUAGES = require('../fixtures/searchLanguages.json')

LANGUAGES.forEach(language => {
    describe('All elements load correctly in '+language.name, ()=>{
        it('go to search page - '+language.name, ()=> {
            const url = 'https://www.wework.com'+language.code+'/search'+language.city_code
            cy.visit(url)
            homePageSpec.acceptCookiesButton().click()
            //homePageSpec.findWorkspaceIn(HOUSTON)
        })

        it('Search workspace elemets', ()=> {
            locationPage.searchInput().should('be.visible')
            locationPage.workspaceTypeDropbox().contains(language.workspace_type).should('be.visible')
            locationPage.workspaceCapacity().should('be.visible')
            locationPage.moveInButton().contains(language.move_in).should('be.visible')
            locationPage.filterMessage().contains(language.filter_message).should('be.visible')
            locationPage.buildingCount().contains(language.building_count).should('be.visible')
        })

        it('Build elemets', ()=> {
            locationPage.buildingsCardImage().should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
            locationPage.buildingsCardName().should('be.visible')
            locationPage.buildingsCardMarket().should('be.visible')
            locationPage.buildingsCardAmenities().should('be.visible')
        })    

        it('Get in touch elemets', ()=> {
            locationPage.getInTouchContainer().contains(language.get_in_touch_container).should('be.visible')
            locationPage.getInTouchButton().contains(language.get_in_touch_button).should('be.visible')

        })


    })
})

describe('search page',()=>{
    it('Language selected language remains after open search page',()=>{
        cy.visit('www.wework.com/es-LA')
        homePageSpec.findLocationButton().click()
        cy.url().should('include', '/es-LA/search')
    })

    it('Search field works correctly',()=>{
        cy.visit('www.wework.com/')
        homePageSpec.acceptCookiesButton().click()
        homePageSpec.findLocationButton().click()
        locationPage.waitForRequest('waitPageLoad')
        locationPage.seearchLocation('New York','New York City, New York','16 E 34th St')
        locationPage.waitForRequest('waitBuildLoad')
        locationPage.buildingList().contains('16 E 34th St').click()
        buildingPage.buildingTitle().contains('16 E 34th St')

    })
})