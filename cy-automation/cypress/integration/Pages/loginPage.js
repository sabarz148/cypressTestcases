class loginPage {

    emailInput() {
        return cy.get('#email')
    }

    passwordInput() {
        return cy.get('#password')
    }

    submitbutton() {
        return cy.contains('Log in')
    }
    

    domInput(){
        return cy.get('#domborn')

    }
    monbornInput(){
        return cy.get('#monthborn')

    }
    yearbornInput(){
        return cy.get('#yearborn')

    }



}
export default loginPage