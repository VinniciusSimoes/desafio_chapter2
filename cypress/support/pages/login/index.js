
const elements = require('./elements').ELEMENTS

class Login {

    acessarLogin() {
        //acessar a página de login
        cy.visit('login');
    }

    preencherFormulario() {
        // preencher o formulário
        cy.get(elements.inputEmail).type(Cypress.config().users.email);
        cy.get(elements.inputPassword).type(Cypress.config().users.password);
    }

    submeterFormulario() {
        // submeter o formulário
        cy.get(elements.buttonSubmit).click();
    }

}

export default new Login();