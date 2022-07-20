import homePageSpec from "../pages/home-page.spec"

describe('HomePage All components load correctly', ()=>{
  beforeEach(()=>{
    cy.visit('https://www.wework.com/')
    homePageSpec.acceptCookiesButton().click()
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
})

describe('HomePage with diferent locales', ()=>{
  beforeEach(()=>{
    cy.visit('https://www.wework.com/')
    homePageSpec.acceptCookiesButton().click()
  })

  it('Find workspace in dropdown is present',()=>{
      homePageSpec.findWorkspaceDropdown().should('be.visible')
    })
  
   
})

