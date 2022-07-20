
class FooterPage{
    constructor() {
        //elements footer
    this.globalLocationsLink = ()=> cy.get('.page-footer > :nth-child(1)')
    this.socialMediaFooter = ()=> cy.get('.page-footer-social-menu')
    this.socialMediaIconFacebook = ()=> cy.get('.icon-facebook')
    this.socialMediaIconInstagram = ()=> cy.get('.icon-instagram')
    this.socialMediaIconTwitter = ()=> cy.get('.icon-twitter')
    this.socialMediaIconLinkedin = ()=> cy.get('.icon-linkedin')
    this.allLocationLink = ()=> cy.get('.ray-link.footer-locations-cta')
    this.infoFooter = ()=> cy.get('.page-footer-contact-section')
    this.privacyLink = ()=> cy.get('#page-footer-legal-menu > :nth-child(1) > .ray-link')
    this.termsLink = ()=> cy.get('#page-footer-legal-menu > :nth-child(2) > .ray-link')
    this.cookiesPolicy = ()=> cy.get('#page-footer-legal-menu > :nth-child(3) > .ray-link')
    this.cookiesSettings = ()=> cy.get('[class=page-footer] [class=ray-grid] li:nth-child(4)')
    this.accessibilityLink = ()=> cy.get(':nth-child(9) > .ray-link')
    this.pageFooterLegalMenuItem = ()=> cy.get('[class=page-footer-legal-menu__item]')
    this.clickButtonConfirmMyChoise = ()=> cy.get('.save-preference-btn-handler')


    this.languageFooter = ()=> cy.get('#languageInput');
    this.languageOptions = (code)=> cy.get(`.page-footer__dropdown-option a[href*='${code}']`);
    }
}

export default new FooterPage