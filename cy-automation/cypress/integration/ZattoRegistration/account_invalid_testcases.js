/// <reference types="cypress" />describe('log in with google', ()=>{
  /// Invalid emails for account are tested below. 
    import registration from '../Pages/registration.js'
    const reg = new registration(); 



    describe('Signup steps invalid test case scenarios', ()=>
       {

      let data;
    before(function () {
      
        cy.fixture('signin').then(function (fdata) {
            data = fdata
        })
    })


          //Visit the website
    it('Signup: Invalid Email Address having space character', ()=> {
     cy.VisitURL();
    
       //Accept the Cookies
     
      cy.AcceptCookies();
      cy.wait(5000);

      //Click the Signup
      cy.ClickSignup();
      cy.wait(3000);


    //   cy.AcceptCookies();
      cy.wait(5000);
        cy.SelectPlan('ULTIMATE')

        cy.account(' ',data.password,data.gender,data.dd,data.mm,data.yy)
        //now verifying that it goes to the next step
        reg.invalidEmail().should('have.text','Please enter a valid email address')

       
      })

      it('Signup: Invalid Email Address having no @ sign and no domain', ()=> {
        cy.VisitURL();
       
          //Accept the Cookies
        
         cy.AcceptCookies();
         cy.wait(5000);
   
         //Click the Signup
         cy.ClickSignup();
         cy.wait(3000);
   
   
       //   cy.AcceptCookies();
         cy.wait(5000);
           cy.SelectPlan('ULTIMATE')
   
           cy.account('random',data.password,data.gender,data.dd,data.mm,data.yy)
           //now verifying that it goes to the next step
           reg.invalidEmail().should('have.text','Please enter a valid email address')
   
          
   
   
         })

     
         it('Signup: Invalid Email Address having no domain and empty password', ()=> {
          cy.VisitURL();
         
            //Accept the Cookies
          
           cy.AcceptCookies();
           cy.wait(5000);
     
           //Click the Signup
           cy.ClickSignup();
           cy.wait(3000);
     
     
         //   cy.AcceptCookies();
           cy.wait(5000);
             cy.SelectPlan('ULTIMATE')
     
             cy.account('random@shg',data.password,data.gender,data.dd,data.mm,data.yy)
             //now verifying that it goes to the next step
             reg.invalidEmail().should('have.text','Please enter a valid email address')
             reg.signup().click()
             reg.invalidPassword().should('have.text','Please enter a password')
     
               
     
           })
    


           it('Signup: Invalid Email Address having no @sign', ()=> {
            cy.VisitURL();
           
              //Accept the Cookies
            
             cy.AcceptCookies();
             cy.wait(5000);
       
             //Click the Signup
             cy.ClickSignup();
             cy.wait(3000);
       
       
           //   cy.AcceptCookies();
             cy.wait(5000);
               cy.SelectPlan('ULTIMATE')
       
               cy.account('random.com',data.password,data.gender,data.dd,data.mm,data.yy)
               //now verifying that it goes to the next step
               reg.invalidEmail().should('have.text','Please enter a valid email address')
       
              
       
       
             })
         //Visit the website
    it('Signup: Password should not accept space characters', ()=> {
      cy.VisitURL();
     
        //Accept the Cookies
      
       cy.AcceptCookies();
       cy.wait(5000);
 
       //Click the Signup
       cy.ClickSignup();
       cy.wait(3000);
 
 
     //   cy.AcceptCookies();
       cy.wait(5000);
         cy.SelectPlan('ULTIMATE')
 
         cy.account('something123@sthg.com'," ",data.gender,data.dd,data.mm,data.yy)
         //now testing if 1 space character is accepted in the password or not.
         reg.invalidPassword().should('have.text','Please enter a password')
 
     
       })
 
       it('Signup: Password should have minimum and maximum length', ()=> {
        cy.VisitURL();
       
          //Accept the Cookies
        
         cy.AcceptCookies();
         cy.wait(5000);
   
         //Click the Signup
         cy.ClickSignup();
         cy.wait(3000);
   
   
       //   cy.AcceptCookies();
         cy.wait(5000);
           cy.SelectPlan('ULTIMATE')
   
           cy.account('something123@sthg.com'," ",data.gender,data.dd,data.mm,data.yy)
           //now testing if 1 space character is accepted in the password or not.
           reg.passwordInput().should('have.a.property','max-length')
           reg.passwordInput().should('have.a.property','max-length')

   
       
         })
 
      
      
     
         it('Signup: All fields are empty', ()=> {
          cy.VisitURL();
         
            //Accept the Cookies
          
           cy.AcceptCookies();
           cy.wait(5000);
     
           //Click the Signup
           cy.ClickSignup();
           cy.wait(3000);
     
     
         //   cy.AcceptCookies();
           cy.wait(5000);
             cy.SelectPlan('ULTIMATE')
     
             reg.signup().click()
             reg.invalidEmail().should('have.text','Please enter a valid email address')
             
             reg.invalidPassword().should('have.text','Please enter a password')
             reg.invalidGender().should('have.text','Please select a gender')

            // 
             reg.invalidDob().should('have.text','Please enter your date of birth')


            
         
           })
   
      
 
      
 
     

     





})
