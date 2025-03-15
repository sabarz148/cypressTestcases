# zattootestcases
**** Zattoo Registration ****

All testcases are in \Cypress\cypress-e2e-automation\cypress\integration\ZattoRegistration Folder


****Testcases cover the following flows with posivite flow:***

1. User registration with Free plan.
2. User registratin with Premium plan.
3. User registration with Ultimate plan.
4. Sign in with registered user.


****Testcases cover the following flows with negivite flow:***

1. Sign in with unregistered user.
2. Sign in with wrong password with correct and registered email.
3. Sign in with wrong email with correct password.
4. Sign in with only space in the password.
5. Sign in with domain missing in email.
6. Sign up with Invalid Email Address having space character
7. Sign up with Invalid Email Address having no @ sign and no domain
8. Sign up with Invalid Email Address having no domain and empty password
9. Sign up with Invalid Email Address having no @sign
10.Sign up with Password that should not accept space characters
11.Sign up with Password that should have minimum and maximum length
12.Sign up when all fields are empty



****Command to run the all testcases from terminal along with mochawesome reports****
npm run zattoRegistration

 
****Videos results****
Please check the video results in 
cypress\videos

****Fixtures****
Please check the input data from  
signin.json

****Commands****
Please check the custom functions  

****Screenshots of results****
cypress\screenshots

Limitations
1. Random user creation for user registration
2. This might have some extra files and require cleaning.


