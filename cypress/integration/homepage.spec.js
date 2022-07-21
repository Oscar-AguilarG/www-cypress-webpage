import homePage from "../pages/home-page"
const LANGUAGES = require('../fixtures/localesVerify.json')
describe('Validate Home Slider', { tags:'@DemoSuite'},() => {
  beforeEach(() => {
    cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
    homePage.acceptCookies()
  })
  it('Verify Slider', () => {
    cy.title().should('eq', 'WeWork | Office Space and Workspace Solutions')
    homePage.findSliderHome().click().should('have.attr', 'data-autoplay-state', 'pause').should('be.visible').click().should('have.attr', 'data-autoplay-state', 'play')
    homePage.findSliderHomeButtonRight().should('be.visible').last().click()
    homePage.findSliderHomeButtonLeft().first().should('not.have.class', 'hidden')
  })
})

LANGUAGES.forEach(language => {
describe('HomePage Verify locale '+language.name, { tags:'@DemoSuite'},() => {
  beforeEach(() => {
    cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
    homePage.acceptCookies()
  })
  it('Checking redirect Multiple languages', () => {
    homePage.findLanguageOptionsButton().click()
    homePage.findLanguageOptions().contains(language.name).click().url().should('include', language.code).title('eq', language.page_title)
  })
})
})

describe('HomePage All components load correctly',() => {
  beforeEach(() => {
    cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
    homePage.acceptCookies()
  })
  it('Browse by workspace is present', { tags:'@DemoSuite'}, () => {
    homePage.browseByWorkspace('bes')
    homePage.browseByWorkspace().should('have.length', 4)
    homePage.browseByWorkspace().contains('Office space').should('be.visible')
    homePage.browseByWorkspace().contains('Dedicated desk').should('be.visible')
    homePage.browseByWorkspace().contains('Hot desk').should('be.visible')
    homePage.browseByWorkspace().contains('Meeting room').should('be.visible')
  })

  it('Main menu is visible', { tags:'@DemoSuite'}, () => {
    homePage.locationButton().should('be.visible')
    homePage.solutionsButton().should('be.visible')
    homePage.enterpriceButton().should('be.visible')
    homePage.ideasButton().should('be.visible')
    homePage.contactUsButton().should('be.visible')
    homePage.loginButton().should('be.visible')
  })

  it('Find workspace in dropdown is present', { tags:'@DemoSuite'}, () => {
    homePage.findWorkspaceDropdown().should('be.visible')
  })

  it('Find link View all solution is present', { tags:'@DemoSuite'}, () => {
    homePage.findViewSolutionLink().contains('View all solutions').should('be.visible')
  })

  it('Find Feedback option is present', { tags:'@DemoSuite'}, () => {
    homePage.findFeedbackLink().should('be.visible')
  })

  it('Find link View all locations is present', { tags:'@DemoSuite'}, () => {
    homePage.findViewAllLocationsLink().contains('View all in ').should('exist')
  })

  it('Find Cards Articles is present', { tags:'@DemoSuite'}, () => {
    homePage.findAllCardsAticlesLink().should('be.visible')
  })

  it('Find Home Case Study is present', { tags:'@DemoSuite'}, () => {
    homePage.findAllHomeCaseStudyLink().should('be.visible')
  })
  it('Find Media WorkSpace Section is present', { tags:'@DemoSuite'}, () => {
    homePage.findAllMediaSpacesSection().should('be.visible')
  })
  it('Find All Slider Builder is present', { tags:'@DemoSuite'}, () => {
    homePage.findAllSliderBuilderSection().should('exist')
  })
  it('Find Home Slider Section is present', { tags:'@DemoSuite'}, () => {
    homePage.findSliderHomeSection().should('be.visible')
  })

  describe('Verify search workspace ', () => {
    beforeEach(() => {
      cy.visit('/?override_treatments=homepage_refresh_phase1_test=1')
      homePage.acceptCookies()
    })
    it('Checking redirect find workspace dropdwown', () => {
      homePage.findWorkspaceDropdown().select('Buenos Aires')
      homePage.startButton().click()
      cy.url().should('include','buenos-aires')
      homePage.findInputSearch().should('have.value', 'Buenos Aires, Argentina')   
    })
    })
})
