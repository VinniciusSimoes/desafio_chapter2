/// <reference types="cypress" />

import cadastro from '../support/pages/register/index'

context('Cadastro', () => {

    it('Cadastrar um novo usuário', () => {
        // acesso
        cadastro.acessarCadastro()

        //preenchi
        cadastro.preencheFormularioDeCadastro()

        
// POST 200 https://conduit.productionready.io/api/users
// (xhr)
// GET 200 https://conduit.productionready.io/api/tags
// (xhr)
// GET 200 https://conduit.productionready.io/api/articles/feed?limit=10&offset=0




        // submeter
        cadastro.submeterFormularioDeCadastro()

        // validar
        cadastro.validarSeCadastroFoiCriadoComSucesso()

    });
});