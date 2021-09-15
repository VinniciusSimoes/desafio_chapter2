/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Articles', () => {
    // hooks -> momentos antes / depois do teste
    // before / beforeEach
    // after/ afterEach
    beforeEach(() => {
        // Preparação
        cy.backgroudLogin();
    });



    it('Criar um novo artigo', () => {
        // elementos:
        // Ação
        articles.preencherFormulario();
        articles.submeterArtigo();
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();
        
        // Verificação
        

        // AAA -> Arrange Act Assert
        // PAV -> Preparação Ação Verificação/Validação
    });
});