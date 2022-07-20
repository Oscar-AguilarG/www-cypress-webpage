class solutionsPage {
  constructor() {
    // Objects
    this.dedicatedDeskElement = () => cy.get("a[href*='/solutions/dedicated-desk']");
    this.privateOfficeElement = () => cy.get("a[href*='/solutions/private-office-space']");
    this.officeSuiteElement = () => cy.get("a[href*='/solutions/office-suite']");
    this.fullFloorElement = () => cy.get("a[href*='/solutions/full-floor-office']");
    this.allAccessElement = () => cy.get("div[class= 'card-product ray-grid__cell--span-2-phone ray-grid__cell--span-4-tablet ray-grid__cell--span-4-desktop']");

    // Modules 
    this.dedicatedSpaceModule = () => cy.get("div[data-module-sku= 'dedicated-space']");
    this.monthlySubscriptionModule = () => cy.get("div[data-module-sku = 'monthly-subscription']");
    this.eventAndProductionModule = () => cy.get("div[data-test-id = 'card-product-banner']");
    this.meetOurClientsModule = () => cy.get("div[class = 'solutions-page__section solutions-page__section--extended']");

    // Headers
    this.mainHeader = () => cy.get("h1.solutions-page-header");

    
  }
}

export default new solutionsPage();