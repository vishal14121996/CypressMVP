import cookie_consent from '../../PageObjects/cookie-consent'
import homePage_SignIn from '../../PageObjects/homePage_SignIn'
import applyHomeloanpages from '../../PageObjects/applyHomeloanpages';
describe("Validate HomeLoan Lead", ()=>{
    
    beforeEach(() => {
        homePage_SignIn.navigate() 
        cookie_consent.clickOnCookieCrossIcon()

    });



it.only("Verify Home Loan Lead",()=>{
    
    applyHomeloanpages.clickOnApplyHLbtn()
    applyHomeloanpages.setName()
    applyHomeloanpages.setEmail()
    applyHomeloanpages.setPhoneNumber()
    applyHomeloanpages.selectCity()
    applyHomeloanpages.selectOccupation()
    applyHomeloanpages.enterLoanAmout()
    applyHomeloanpages.selectHaveYouIdentifiedTheProperty()

    })
})