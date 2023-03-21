class homePage_SignIn
{
    elements = {
        linkSignInonHomePage: () => cy.get('.js-show-login-form > .signin-txt'),
        txtEmail: () => cy.get('.js-signin-content-wrap > .signup-formwrap > :nth-child(1) > .field-wrap > .input-box'),
        txtPassword: () => cy.get('.js-signin-content-wrap > .signup-formwrap > :nth-child(2) > .field-wrap > .input-box'),
        btnSignIn: () => cy.get(':nth-child(3) > .field-wrap > .no-ajaxy'),
        linkForgotPassword: () => cy.get('.forgot-password'),
        msgIncorrectCredentials: () => cy.get('.js-signin-content-wrap > .signup-formwrap > :nth-child(3) > .field-wrap > .error-info'),
        linkUserNameOnHomePage: () => cy.get('.js-username'),
        linkSignInonHomePageAfterLogin: () => cy.get('.js-show-login-options > .signinimg-wrap > #siginLogo'),
        linkLogout: () => cy.get('[data-option="opt_logout"] > .optn-label'),
        icnCrossiconOnSignInPopupPage: () => cy.get('.close-btn > .icon-new-close'),
        txtEmail_forgotPassword: () => cy.get('.js-forgot-password-content-wrap > .signup-formwrap > :nth-child(1) > .field-wrap > .input-box'),
        btnResetPassword: () => cy.get(':nth-child(2) > .field-wrap > .no-ajaxy'),
        msgEmailRequired: () => cy.get('.js-forgot-password-content-wrap > .signup-formwrap > :nth-child(1) > .field-wrap > .error-info'),
        msgEmailIdNotRegistered: () => cy.get('.js-forgot-password-content-wrap > .signup-formwrap > :nth-child(2) > .field-wrap > .error-info'),
        btnOkOnConfirmationLinkSent: () => cy.get('.form-row > .no-ajaxy'),
        msgConfirmationLinkSent: () => cy.get('.js-confirmation-content-wrap > .heading'),
        btnOfCrossOnResetPassword: () => cy.get('.close-btn > .icon-new-close'),

    }


    navigate()
    {
        cy.visit("www.proptiger.com");
    }
    
    clickOnSignInLink()
    {
        cy.reload()
        this.elements.linkSignInonHomePage().click().wait(200);
        
    }

    typeEmailonSignPopupPage(data)
    {
        this.elements.txtEmail().type(data)
    }

    typePasswordOnSignPopupPage(data)
    {
        this.elements.txtPassword().type(data)
    }

    clickOnSignInButtonOnSignPopupPage()
    {
        this.elements.btnSignIn().click().wait(2000)
    }

    validateLoginWithValidorInvaild(data)
    {
        if(data=='Invalid email or password. Please try again')
        {
            this.elements.msgIncorrectCredentials().should('have.text','Invalid email or password. Please try again')
            this.elements.icnCrossiconOnSignInPopupPage().click()
        }
        else
        {
            this.elements.linkUserNameOnHomePage().should('have.text','vishal')
            this.elements.linkSignInonHomePageAfterLogin().click()
            this.elements.linkLogout().click()
        }
    }

    clickOnForgotPasswordLink()
    {
        this.elements.linkForgotPassword().click()
        
    }

    typeEmailonResetPasswordPage(data)
    {
        this.elements.txtEmail_forgotPassword().type(data)
    }

    validateForgotPasswordisSetOrNot(data)
    {   
        this.elements.btnResetPassword().click()
        if(data=='Invalid email or password. Please try again')
        {
            this.elements.msgEmailIdNotRegistered().should('have.text','Sorry, this email id is not registered with us.')
            this.elements.btnOfCrossOnResetPassword().click()
        }
        else
        {
            this.elements.msgConfirmationLinkSent().should('be.visible')
            this.elements.btnOkOnConfirmationLinkSent().click()
        }

    }

    clickOnResetPasswordLinkwithoutEnterEmail()
    {

        this.elements.btnResetPassword().click()
        this.elements.msgEmailRequired().should('have.text','Email id is required')
        this.elements.btnOfCrossOnResetPassword().click()

    }
    

}
export default new homePage_SignIn();