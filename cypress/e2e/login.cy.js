

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://sacnew.ascbrazil.com.br')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#login-user').type('user_qa')
        cy.get('#login-password').type('ascQA2022')
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .box > .box-title > h3').should('contain', 'Atendimento por Canal')
        cy.get('#side_home > a').should('contain', 'Home')
    })

    it.only('Deve fazer login com sucesso - Usando aquivo de dados', () => {
        cy.get('#login-user').type(perfil.usuario)
        cy.get('#login-password').type(perfil.senha)
        cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        cy.get(':nth-child(4) > :nth-child(1) > .box > .box-title > h3').should('contain', 'Atendimento por Canal')
        cy.get('#side_home > a').should('contain', 'Home')
    })


})
