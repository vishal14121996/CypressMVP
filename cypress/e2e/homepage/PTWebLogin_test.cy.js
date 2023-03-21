import cookie_consent from '../../PageObjects/cookie-consent'
import homePage_SignIn from '../../PageObjects/homePage_SignIn'
import userdata from '../../fixtures/Login_Data.json'
import forgetPassworddata from '../../fixtures/ForgotPassword.json'


describe("Validate PT Web Login Module", ()=>{
    
    beforeEach(() => {
        homePage_SignIn.navigate() 
    });



    it("Cookie Pop-up should be visible",()=>{
        cookie_consent.elements.popUpCookieConsent().should('be.visible');
    })


    it("Cookie Pop-up should not be visible", ()=>{
        cookie_consent.clickOnCookieCrossIcon()
        cookie_consent.elements.popUpCookieConsent().should('not.be.visible')
    })

    it("Login with valid & Invalid credentials",()=>{
        userdata.forEach((fields)=>
        {
            homePage_SignIn.clickOnSignInLink()
            homePage_SignIn.typeEmailonSignPopupPage(fields.username)
            homePage_SignIn.typePasswordOnSignPopupPage(fields.password)
            homePage_SignIn.clickOnSignInButtonOnSignPopupPage()
            homePage_SignIn.validateLoginWithValidorInvaild(fields.expected)
        })
    })

    it("Forgot Password Link sent is working or Not", ()=>{
        forgetPassworddata.forEach((filldata)=>
        {
            homePage_SignIn.clickOnSignInLink()
            homePage_SignIn.clickOnForgotPasswordLink()
            homePage_SignIn.typeEmailonResetPasswordPage(filldata.email)
            homePage_SignIn.validateForgotPasswordisSetOrNot(filldata.expected)

        })

    })

    it('Error should be displayed without Enter the Email on Reset Password', ()=>{
        homePage_SignIn.clickOnSignInLink()
        homePage_SignIn.clickOnForgotPasswordLink()
        homePage_SignIn.clickOnResetPasswordLinkwithoutEnterEmail()


    })
    
})

