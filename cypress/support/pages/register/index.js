const faker = require('faker')

const elementos = require('./elements').ELEMENTS

import Routes from '../../routes/register/routes'

class Cadastro {
    acessarCadastro() {
        // acesso ao registro de um usuario
        cy.visit('register');
    }

    preencheFormularioDeCadastro(){
        // elementos
        cy.get(elementos.inputUsername).type(faker.name.firstName() + faker.name.lastName());
        cy.get(elementos.inputEmail).type(faker.internet.email());
        cy.get(elementos.inputPassword).type(12345678);
    }

    submeterFormularioDeCadastro(){
        cy.get(elementos.buttonSubmit).click();
    }

    validarSeCadastroFoiCriadoComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUserResponse) => {
            expect(postUserResponse.status).to.eq(200);
        })
        cy.wait(`@${Routes.as.getTagUsers}`).then((getTagUsersResponse) =>{
            expect(getTagUsersResponse.status).to.eq(200);
        })
        cy.wait(`@${Routes.as.getFeedUsers}`).then((getFeedUsersResponse) => {
            expect(getFeedUsersResponse.status).to.eq(200);
        })
    }
}

export default new Cadastro();