describe('Question 2', function() {
    it('question 2', function (){
// login to the admin dashboard
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();

// Write a test script to create, edit and delete "Employee"
       cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
       cy.get('.orangehrm-header-container > .oxd-button').click();
       cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Dexter')
       cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Mac')
       cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Jay')
       cy.get('.oxd-switch-input').click()
       cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Dexter')
       cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
       cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123@123')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123@123')
       cy.get('.oxd-button--secondary').click()
     

        //cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button')

        //Edit
       cy.get(':nth-child(2) > .oxd-main-menu-item').click()
       cy.get(':nth-child(10) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
       cy.get(':nth-child(6) > .orangehrm-tabs-item').click({force: true})
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').focus({force: true})
       cy.get('.oxd-form-actions > .oxd-button').click()




        

        //delete
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(9) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force: true})
        cy.get('.oxd-button--label-danger').click();


    })
})