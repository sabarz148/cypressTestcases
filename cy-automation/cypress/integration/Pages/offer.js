class offer{


    allPlans(){

        return cy.get('table>thead>tr>th')
    }

    planBtn(){

        return cy.get('main>div>div>button')
    }


    accessDashboard(){
        return cy.get('.zrs_gHVod')
    }

    myPlan(){
        return cy.get('main>div>div>div>h3>span')
        

    }


}
    

export default offer