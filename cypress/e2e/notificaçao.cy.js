const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Cadastro de Notificação', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login('user_qa', 'ascQA2022')
    });

    afterEach(() => {
        cy.screenshot()

    })

    it('Deve fazer cadastro de notificação com sucesso', () => {
        let mensagem= 'Teste-automatizado-Caroline'
        cy.get('#side_agentes > .dropdown-toggle').click()
        cy.get('#side_agente_notificacoes > a').click()
        cy.get('.btn-to-success > .fa').click()
        cy.get('#nom_msg').type(mensagem)
        cy.get('.btn-info').click()
        cy.get('#tblBody > :nth-child(1) > :nth-child(3)').should('contain', mensagem)
    })



})