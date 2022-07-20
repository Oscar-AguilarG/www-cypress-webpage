function mockLocation(latitude, longitude) {

  return {

    onBeforeLoad(win) {

      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
        
        
          return cb({ coords: { latitude, longitude } });

        

        throw err({ code: 1 });

      });

    }

  };

}

describe('Mock Geo Location', () => {

  it('Geo Location Test', () => {
    cy.intercept('GET','https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location', {fixture: 'geo.json'})
    cy.visit('https://www.wework.com/');
    
    cy.intercept('GET','https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location', {fixture: 'geo.json'})
    cy.get('a[href="/search"]').click()
    //cy.visit("https://www.google.com.mx/maps/", mockLocation(35.172744,137.05802));
  });

})