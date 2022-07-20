class BuildingPage {
  constructor() {
    this.buildingTitle = () => cy.get("#heading")
    this.buildPageURI = () => cy.url().should("include", "buildings")
    //** The building page will have multiple forms, they're used for seperate devices/purposes (the tour and reach out form fields share IDs, so we just query the proper one by providing an index), but are hidden. So we query the first, another option is the query visible */
    this.fullName = (idx) =>
      cy.get(".ray-text-field > input[data-test-id=fullName]").eq(idx)
    this.email = (idx) =>
      cy.get(".ray-text-field > input[data-test-id=email]").eq(idx)
    this.phone = (idx) => cy.get("input[data-test-id=phone]").eq(idx)
    this.moveInDate = (idx) =>
      cy.get(".ray-text-field > #move-in-date").eq(idx)
    this.interestedIn = (idx) => cy.get(".ray-dropdown__body").eq(idx)
    this.dropdownSelection = (idx, selection) =>
      cy
        .get(
          `#lead_product-interests-select-list > #lead_product-interests-select-option-${selection}`
        )
        .eq(idx)
    this.step1Submit = () => cy.get("#step1Submit").first()
    this.tourDate = () => cy.get("#tour-date").first()
    this.headlineWithReviews = () => cy.get(".headline-with-reviews")
    this.selfServe = () => cy.get(".self-serve")
    this.helpTextWrapper = () => cy.get(".help__text-wrapper")
    this.bookTourBtn = () => cy.get("#book-tour-btn")
    this.getInTouchBtn = () => cy.get("#get-in-touch-btn")
    this.dayContainer = () => cy.get(".dayContainer > .today")
  }
}

export default new BuildingPage();
