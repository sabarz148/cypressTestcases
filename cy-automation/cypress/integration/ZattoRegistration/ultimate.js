/// <reference types="cypress" />describe('log in with google', ()=>{
  /// Ultimate user registration testcase
    import dashboard from '../Pages/dashboard.js';
import offer from '../Pages/offer.js';
import registration from '../Pages/registration.js'
    const reg = new registration(); 
    const offers=new offer();
    const mydashboard=new dashboard();
    
    describe('Register a new user', ()=>
   
    {

      let data;
    before(function () {
      
        cy.fixture('signin').then(function (fdata) {
            data = fdata
        })
    })


    beforeEach(function(){

          Cypress.Cookies.preserveOnce('session_id', 'remember_token')

    })
       //Visit the website
    it('Register a user with ultimate plan', ()=> {
     cy.VisitURL();
    
       //Accept the Cookies
     
      cy.AcceptCookies();
      cy.wait(5000);

      //Click the Signup
      cy.ClickSignup();
      cy.wait(3000);
      cy.url().should('have.string',Cypress.env('shop'))


    //   cy.AcceptCookies();
      cy.wait(5000);
        cy.SelectPlan('ULTIMATE')
        cy.url().should('have.string',Cypress.env('signup'))


        cy.account(data.newemail3,data.password,data.gender,data.dd,data.mm,data.yy)
        cy.wait(3000);
        //now verifying that it goes to the next step
        cy.url().should('have.string',Cypress.env('payment'))
        offers.myPlan().should('have.text','ULTIMATE')
        offers.accessDashboard().click()
        cy.url().should('have.string',Cypress.env('highlights'))
        cy.wait(3000)

        mydashboard.settings().click()

        mydashboard.useremail().should('have.text',data.newemail3)



        mydashboard.logout().click()


       


      })



     
     
    
     
     

     





})
