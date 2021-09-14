const faker = require('faker')

const element = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    preencherFormulario() {
        // preencher o formulário do artigo
        cy.get(element.inputTitle).type('Agilizei Tittle');
        cy.get(element.inputDescription).type('Cypress');
        cy.get(element.textAreaContent).type(faker.lorem.paragraph());
        cy.get(element.inputTags).type('Cypress');
    }

    submeterArtigo() {
        //submeter o artigo
        cy.get(element.buttonSubmit).click();
    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {
        
        cy.wait(`@${Routes.as.postArticles}`).then((postArticleResponse) =>{
            expect(postArticleResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticleTitleResponse) =>{
            expect(getArticleTitleResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticleCommentsResponse) =>{
            expect(getArticleCommentsResponse.status).to.eq(200)
        })
    }



}

export default new Articles();