class registration {

    emailInput() {
        return cy.get('#login')
    }

    passwordInput() {
        return cy.get('#password')
    }

    genderInput(){

        return cy.get('#gender')
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


    
    signup(){
       
        return cy.contains('Sign up')
    }
privacy(){
    return cy.get('.zrs_m38I6')
}
verifyNextStep(){
    return cy.get('main>div>div')
}

userExists(){
    return cy.contains('Email address is already in use.')
}

invalidEmail(){
    return cy.contains('Please enter a valid email address')

}

invalidPassword(){
    return cy.contains('Please enter a password')

}
invalidDay(){

    return cy.contains('Please enter a day value between 1 and 31')
}

invalidMonth(){
    return cy.contains('Please enter a month value between 1 and 12')
}
  
invalidDob(){
    return cy.contains('Please enter your date of birth')
}

invalidGender(){

    return cy.contains('Please select a gender')
}

invalidYear(){
    return cy.contains('Please enter a year value between 1900 and 2006')

}


}
export default registration