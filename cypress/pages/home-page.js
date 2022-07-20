import locationPage from "./location-page"

class HomePage{
    constructor(){
        this.loginButton = ()=> cy.get('span.nav-login-cta__text')
        this.locationButton = ()=> cy.get('a[href*="/search"].track-nav-link-click')
        this.solutionsButton = ()=> cy.get('a[href="/solutions"]')
        this.enterpriceButton = ()=> cy.get('a[href="/enterprise"]')
        this.ideasButton = ()=> cy.get('a[href="/ideas"]')
        this.contactUsButton = ()=> cy.get('a[href="/contact-us"]')
        this.loginButton = ()=> cy.get('a[href="https://members.wework.com"]')
        this.acceptCookiesButton = ()=> cy.get('#onetrust-accept-btn-handler')
        this.findWorkspaceDropdown = ()=> cy.get('#locations-dropdown')
        this.browseByWorkspace = ()=> cy.get('a[data-test-id="browse-by-workspace__item-link"]')
            

        this.startButton = ()=> cy.get('#select-location-btn')

        this.findLocationButton = ()=> cy.get('a[data-test-id="hero-location-link"]')

        this.findViewSolutionLink = ()=> cy.get('.browse-by-workspace__header-cta-link')
        this.findFeedbackLink = ()=> cy.get('.kampyle_button-text')
        this.findViewAllLocationsLink = ()=> cy.get('.ray-link--with-arrow.nearby-buildings__location-link')
        this.findAllCardsAticlesLink = ()=> cy.get('li[class*="cards-articles-banner-gallery__card ray-grid__cell--span-4-desktop"]')
        this.findAllHomeCaseStudyLink = ()=> cy.get('div[class*="ray-grid home-case-study__logos"]')
        this.findAllMediaSpacesSection= ()=> cy.get('div[class*="ray-grid media-text-three-across__items"]')
        this.findAllSliderBuilderSection= ()=> cy.get('[data-name="nearby-buildings-slider"]')
        this.findSliderHomeSection= ()=> cy.get('[data-name="homepage main slider"]')
        this.findLanguageOptionsButton= ()=> cy.get('#languageInput') 
        this.findLanguageOptions= ()=> cy.get('[class="page-footer__dropdown-option"]') 
        this.findSliderHome= ()=> cy.get('[data-autoplay-state]')
        this.findSliderHomeButtonRight= ()=> cy.get('.we-glide-touch-event-interceptor > [data-glide-el="controls"] > .slider__arrow-btn--right')
        this.findSliderHomeButtonLeft= ()=> cy.get('.we-glide-touch-event-interceptor > [data-glide-el="controls"] > .slider__arrow-btn--left')
        this.findInputSearch= ()=> cy.get('#search-input')

    }

    findWorkspaceIn(city){
        this.findWorkspaceDropdown().select(city.VALUE)
        this.startButton().click()
    }

    goToSearchPage(){
        cy.get('body').then((body) => {
            if (body.find('#select-location-btn').length > 0) {
                locationPage.waitForRequest('waitContryLoad')
                this.startButton().click()
            }
            else {
                cy.get('a[data-test-id="hero-location-link"]').click()
            }
        })
    }
    acceptCookies(){
        if(Cypress.env('cookies')){
            this.acceptCookiesButton().click()
        }
    }
}

export default new HomePage