import buildingPage from "../pages/building-page"
import homePage from "../pages/home-page"
const BUILDING = require('../fixtures/building.json')

describe("building page", { tags:'@DemoSuite'}, () => {

  beforeEach(() => {
    cy.visit('/buildings/430-park-avenue--new-york-city--NY')
    homePage.acceptCookies()
  })
  it("renders correctly", () => {
    buildingPage.headlineWithReviews().should("exist")
    buildingPage.selfServe().should("exist")
    buildingPage.helpTextWrapper().should("exist")
    buildingPage.selfServe().should("be.visible")
  });

  BUILDING.forEach(building => {
  describe("selfserve", () => {

    it("can fill out two steps of the tour form without error", () => {
      buildingPage.bookTourBtn().click({force: true});
      // fill out book a tour form step 1 form
      //** for the methods navigating to parent this is required because the ray inputs have a label that obscure the input */
      buildingPage.fullName(0).parent().click()
      buildingPage.fullName(0).clear()
      buildingPage.fullName(0).type(building.fullName)
      buildingPage.email(0).parent().click()
      buildingPage.email(0).clear()
      buildingPage.email(0).type(building.email)
      buildingPage.phone(0).parent().parent().click()
      buildingPage.phone(0).clear()
      buildingPage.phone(0).type(building.phone)
      buildingPage.moveInDate(0).click()
      buildingPage.dayContainer().first().click()
      buildingPage.interestedIn(0).click()
      buildingPage.dropdownSelection(0, 2).click()
      // step 2 form
      buildingPage.step1Submit().click()
      buildingPage.tourDate().click()
      // figure out how to select a date, this is complicated because weekends are disabled and you can't select current date
    });

    it("Can fill out get in touch form without error", function () {
      buildingPage.getInTouchBtn().click({force: true})
      buildingPage.fullName(1).parent().click()
      buildingPage.fullName(1).clear()
      buildingPage.fullName(1).type(building.fullName)
      buildingPage.email(1).parent().click()
      buildingPage.email(1).clear()
      buildingPage.email(1).type(building.email)
      buildingPage.phone(1).parent().parent().click()
      buildingPage.phone(1).clear()
      buildingPage.phone(1).type(building.phone)
      buildingPage.moveInDate(1).click()
      buildingPage.dayContainer().eq(1).click()
      buildingPage.interestedIn(1).click()
      buildingPage.dropdownSelection(1, 2).click()
    })
  })
})
})
