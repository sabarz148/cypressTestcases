class dashboard{

settings(){

    return cy.get('ul > li:nth-child(7) > a')
}

logout(){
    return cy.contains('Log out')
}
useremail(email){
    return cy.get('div > section:nth-child(1) > div > div > p > span.DqbBp')
}
}
export default dashboard