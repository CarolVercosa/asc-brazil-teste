/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://sacnew.ascbrazil.com.br')
        cy.get('#login-user').type('user_qa')
        cy.get('#login-password').type('ascQA2022')
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .box > .box-title > h3').should('contain', 'Atendimento por Canal')
        cy.get('#side_home > a').should('contain', 'Home')
    })

    it('Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://sacnew.ascbrazil.com.br')
        cy.get('#login-user').type('user')
        cy.get('#login-password').type('ascQA2022')
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get('.alert') .should ('contain', 'Nome de usuário ou senha inválidos.')

    })

    it('Deve inserir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://sacnew.ascbrazil.com.br')
        cy.get('#login-user').type('user_qa')
        cy.get('#login-password').type('asc')
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get('.alert') .should ('contain', 'Nome de usuário ou senha inválidos.')
    

})

})