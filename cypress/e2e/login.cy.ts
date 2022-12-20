describe("Login Page", ()=>{

    it("Should contain user name input", ()=>{
        cy.visit('/login');
        cy.get('[formcontrolname="userName"]').should('be.visible');
    });

    it("Should contain password field", ()=>{
        cy.visit('/login');
        cy.get('[formcontrolname="password"]').should('be.visible');
    });

    it("user should be able to type user name on input filed", ()=>{
        cy.visit('/login');
        cy.get('[formcontrolname="userName"]').type('shyam');
    });

    it("user should be able to type password on password input filed", ()=>{
        cy.visit('/login');
        cy.get('[formcontrolname="password"]').type('terminal');
    })

    it('should contain rest button', ()=>{
        cy.visit('/login');
        cy.get('[cy-data = "rest" ]').should('be.visible');
    });

    it('should contain login button', ()=> {
        cy.visit('/login');
        cy.get('[cy-data = "login"]').should("be.visible");
    })

    it('Reset button should reset the fields', ()=> {
        cy.visit('/login');
        cy.get('[cy-data="rest"]').click();
    })
    it("Login button should allow user login", ()=>{
        cy.visit('/');
        cy.get('[formcontrolname="userName"]').type('shyam');
        cy.get('[formcontrolname="password"]').type('shyam');
        cy.get('[cy-data="login"]').click();   
     });

});