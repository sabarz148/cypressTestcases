/// <reference types="cypress" />describe('log in with google', ()=>{
  /// Valid users flow is tested.
import dashboard from '../Pages/dashboard.js';
import loginPage from '../Pages/loginPage.js';
const login = new loginPage();
const mydashboard=new dashboard();
describe('Validate Login', function () {

   
    let data;
    before(function () {
        cy.fixture('signin').then(function (fdata) {
            data = fdata
        })
    })
    before('Access URL', () => {
        cy.visitLoginURL()

    })

    it('logs in a user', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn(data.email,data.password)
        cy.wait(4000)
        cy.url().should('have.string',Cypress.env('highlights'))

        cy.wait(5000)

        mydashboard.settings().click()

        mydashboard.useremail().should('have.text',data.email)

        cy.logout();
        cy.wait(3000)
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    xit('Validaation message',()=>{
    cy.get('#fb-root').invoke('text').then((text)=> {
        const toastText = text;

        expect(toastText).to.equal("Something went wrong")
    })



    })
})

