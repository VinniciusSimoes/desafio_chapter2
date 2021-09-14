/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {   // tem como especificar qual browser ou nao que queira , apenas assim  { browser: '!fiferox'}
    it('Realizar login com sucesso', () => {

        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();
        // verificação
    });
});