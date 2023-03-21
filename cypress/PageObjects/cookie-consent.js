
class cookie_consent
{
   // icnAcceptCookieConsent=".js-disclaimer > .icon-new-close";

   elements = {
    icnCookieConsent: () => cy.get('.js-disclaimer > .icon-new-close'),
    popUpCookieConsent: () => cy.get('.d-ib > span')
}

    clickOnCookieCrossIcon()
    {
       this.elements.icnCookieConsent().click();
    }



}
module.exports = new cookie_consent();
