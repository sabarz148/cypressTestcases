/// <reference types="cypress" />describe('log in with google', ()=>{
  /// User Registration to Check the Free plan.
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
    it('Register a user with FREE plan', ()=> {
     cy.VisitURL();
    
       //Accept the Cookies
     
      cy.AcceptCookies();
      cy.wait(5000);

      //Click the Signup
      cy.ClickSignup();
      cy.wait(3000);
      cy.url().should('have.string',(Cypress.env('shop')))


    //   cy.AcceptCookies();
      cy.wait(5000);
        cy.SelectPlan('FREE')
        cy.url().should('have.string',(Cypress.env('signup')))


        cy.account(data.newemail1,data.password,data.gender,data.dd,data.mm,data.yy)
        cy.wait(3000);
        //now verifying that it goes to the next step
        offers.myPlan().should('have.text','FREE')

        cy.url().should('have.string',(Cypress.env('confirm_product')))
        offers.accessDashboard().click()
        cy.url().should('have.string',(Cypress.env('highlights')))
        cy.wait(3000)

        mydashboard.settings().click()

        mydashboard.useremail().should('have.text',data.newemail1)



        mydashboard.logout().click()
        cy.wait(3000)

        cy.url().should('have.string',Cypress.env('login'))

        




      })



     
     
    
     
     

     





})
