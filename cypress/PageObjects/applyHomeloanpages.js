class HomeLoanPopUp
{
elements={
btnGetAHomeLoan: () => cy.get('.cursor-p > .header-link-txt'),
txtCustmoreName:() => cy.get('.js-applicantName'),
txtPhoneNumber:() => cy.get('.w75 > .field-input'),
txtEmail:() => cy.get('.js-email'),
txtHaveYouIdentifiedTheProperty :()=> cy.get('.field-options > :nth-child(1) > label > span'),
txtLoanAmount: () =>cy.get('.js-loanAmount'),
btnSubmit: () => cy.get('.hl-submit > .orangeFillBtn'),
dropdownCity: () => cy.get('.js-projectCity'),
dropDownCityList:() =>  cy.xpath("//span[@class='label'][normalize-space()='Hyderabad']"),
dropDownoccupationType: () => cy.get('.js-occupationType'),
dropOccupationType: () => cy.xpath("//span[normalize-space()='Self Employed Professional']")
}
clickOnApplyHLbtn(){
   this.elements.btnGetAHomeLoan().click().wait(5000)
   this.elements.btnGetAHomeLoan().click({force: true});

}
setName(){
    this.elements.txtCustmoreName().type("TestUser")
}
setPhoneNumber(){
    this.elements.txtPhoneNumber().type("9717952092")
}
setEmail(){
    this.elements.txtEmail().type("testdemo@emailtest.com")
}
selectCity(){
    this.elements.dropdownCity().trigger('mouseover')
    this.elements.dropDownCityList().click()
}
selectOccupation(){
    this.elements.dropDownoccupationType().trigger('mouseover')
    this.elements.dropOccupationType().click()
}
selectHaveYouIdentifiedTheProperty(){
    this.elements.txtHaveYouIdentifiedTheProperty().click()
}
enterLoanAmout(){
    this.elements.txtLoanAmount().type(800000)
}
}
export default new HomeLoanPopUp();