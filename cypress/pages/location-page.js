/// <reference types="Cypress" />
class LocationPage{
    constructor(){
        this.searchInput= ()=> cy.get('#search-input')
        this.workspaceTypeDropbox = ()=> cy.get('#search-chip__workspace')
        this.workspaceCapacity = ()=> cy.get('#search-chip__capacity')
        this.caoacityOptions = (capacity)=> cy.get('button.capacity-chip.ray-chip').contains(capacity)
        this.moveInButton= ()=> cy.get('#search-chip__date')
        this.calendarToday = ()=> cy.get('.flatpickr-calendar.open span.today')
        this.calendarDate = (date) => cy.get(`.flatpickr-calendar.open span[aria-label="${date}"]`)
        this.officeSpace = ()=> cy.get('#workspace-radio__office')
        this.dedicatedDesk = ()=> cy.get('#workspace-radio__dedicated')
        this.hotDesk = ()=> cy.get('#workspace-radio__hot')
        this.meetingRoom = ()=> cy.get('#workspace-radio__meeting')
        
        //price description
        this.productDescription = ()=> cy.get('.building-pricing .price-text')
        this.capacityDescription = ()=> cy.get('.building-pricing .capacity-tag')
        this.dateDescription = ()=> cy.get('.building-pricing .date-tag')


        this.filterMessage = ()=> cy.get('#filters-message')
        this.searchInputResultsList = ()=> cy.get('#search-places-results .result-item')
        this.buildingCount = ()=> cy.get('#search-building-count')
        this.buildingList = ()=> cy.get('#results .ray-card__content.building-content')
        
        //building elements
        this.buildingsCardImage = ()=> cy.get('a[data-test-priority="310"] img')
        this.buildingsCardName = ()=> cy.get('a[data-test-priority="310"] .building-heading')
        this.buildingsCardMarket = ()=> cy.get('a[data-test-priority="310"] .building-market')
        this.buildingsCardAmenities = ()=> cy.get('a[data-test-priority="310"] .amenities')

        //get in touch
        this.getInTouchContainer = ()=> cy.get('#lead-form-closed-state')
        this.getInTouchButton = ()=> cy.get('#open-form-btn')
        //Building page
        this.ViewAvailibleWorkspaceButton = ()=> cy.get('#self-serve-btn')
    }

    seearchLocation(city, expectedResult, building){
        this.searchInput().clear().type(city)
        this.searchInputResultsList().contains(expectedResult).click()
        
    }

    waitForRequest(tag){
        cy.intercept({
            method: 'POST',
            url: 'https://api.segment.io/v1/t',
        }).as(tag);
        
        //Wait for response.status to be 200
        cy.wait('@'+tag).its('response.statusCode').should('equal', 200)
    }
}
export default new LocationPage