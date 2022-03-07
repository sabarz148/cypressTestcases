// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//import loginPage from '../Pages/loginPage.js'

import registration from '../integration/Pages/registration.js'
    const reg = new registration(); 
import offer from '../integration/Pages/offer.js';
import dashboard from '../integration/Pages/dashboard.js';
import loginPage from '../integration/Pages/loginPage.js';
// import { values } from 'cypress/types/lodash';
const offers=new offer()
const mydashboard=new dashboard()
const loginPg=new loginPage()

   Cypress.Commands.add('VisitURL', ()=> {
    cy.visit(Cypress.env('url'))
    })

    Cypress.Commands.add('AcceptCookies', () => {
    cy.get('#onetrust-accept-btn-handler').click();
    })

    Cypress.Commands.add('signIn',(email,password) => {
        loginPg.emailInput().type(email,{force: true})
        loginPg.passwordInput().type(password, {force: true})
        loginPg.submitbutton().click()
    })


    Cypress.Commands.add('ClickSignup',() => {
        cy.get('._30FwS._3ERzq._2zV_c._3nod-._3IYjI').click();
    })

   
    Cypress.Commands.add('SelectPlan',(myplan) => {

    offers.allPlans().each(($e1, index, list)=>{
         const plan=$e1.text()

         

    if(plan.includes(myplan)){
      
      cy.wrap($e1).find('button[type="button"]').click({force: true})   
      offers.planBtn().should('contain.text','Continue with '+myplan).click()
    }

    })
})

Cypress.Commands.add('account1',(email) => {
    reg.emailInput().type(email,{force:true})
})



Cypress.Commands.add('account',(email,password,gender,dd,mm,yy)=>{
    reg.emailInput().type(email,{force: true})
    reg.passwordInput().type(password,{force: true})
    reg.genderInput().select(gender,{force: true})
    reg.domInput().type(dd,{force: true})
    cy.get(1000);
    reg.monbornInput().type(mm,{force: true})
    cy.get(1000);
    reg.yearbornInput().type(yy,{force: true})
    
    cy.get(5000);

  //  reg.privacy().click({ multiple: true })
   reg.signup().click()
   


})

Cypress.Commands.add('logout',() => {
    mydashboard.settings().click()
    mydashboard.logout().click()

})

Cypress.Commands.add('visitLoginURL', ()=> {
    cy.visit(Cypress.env('login'))
    })


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
