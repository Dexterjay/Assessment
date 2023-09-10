describe('Question 1', function() {
    it('question 1', function (){
// login to the admin dashboard
        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();

// Write a test script to create, edit and delete "Admin"
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').focus();
        cy.get('.oxd-select-dropdown > :nth-child(3)').click();
        cy.get('.oxd-autocomplete-text-input > input').type('Kiyara Hu');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').focus();
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Olajide')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123@123')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123@123')
        cy.get('.oxd-button--secondary').click();

        //delete
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        //cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force: true})
        //cy.get('.oxd-button--label-danger').click();

        //edit
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true})
        cy.get('.oxd-button--secondary').click();





    })
})