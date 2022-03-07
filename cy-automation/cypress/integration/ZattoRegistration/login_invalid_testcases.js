/// <reference types="cypress" />describe('log in with google', ()=>{
  /// Invalid login testcases.
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
    beforeEach('Access URL', () => {
        cy.visitLoginURL()

    })

    it('login a user with a space in the email field', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn(" ",data.password)
        cy.get('.cGGJG').should('have.text','Wrong username or password')
       
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    it('login a user with invalid email address', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn("dfkjlj.com ",data.password)
        cy.get('.cGGJG').should('have.text','Wrong username or password')
       
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    it('login a user with invalid email address having domain name missing', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn("dfkjlj@jj ",data.password)
        cy.get('.cGGJG').should('have.text','Wrong username or password')
       
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    it('login a user with valid but unregistered email and password', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn("notregistered@new.com",data.password)
        cy.get('.cGGJG').should('have.text','Wrong username or password')
       
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    it('login a user with valid email and but wrong password', ()=> {
        cy.wait(5000);
        cy.AcceptCookies();
        cy.wait(1000);
        cy.signIn(data.email,"akndkj")
        cy.get('.cGGJG').should('have.text','Wrong username or password')
       
        cy.url().should('have.string',Cypress.env('login'))

        
    })

    


    
})

