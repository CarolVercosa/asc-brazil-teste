const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Cadastro de Notificação', () => {

    beforeEach(() => {
        cy.visit('http://sacnew.ascbrazil.com.br')
    });

    it('Deve fazer cadastro de notificação com sucesso', () => {
        cy.get('#login-user').type('user_qa')
        cy.get('#login-password').type('ascQA2022')
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .box > .box-title > h3').should('contain', 'Atendimento por Canal')
        cy.get('#side_home > a').should('contain', 'Home')    
        
    })



})