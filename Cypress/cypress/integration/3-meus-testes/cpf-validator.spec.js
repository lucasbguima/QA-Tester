/// <reference types="cypress" />

describe('example cpf validator', () => {
    it('captcha test', () => {
        var cpf = '05191285166'
        var nascimento = '06011995'
        var captcha = 'd4DLUT'
        cy.visit('https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp')
        cy.get('#txtCPF').focus().type(cpf)
        cy.get('#txtDataNascimento').focus().type(nascimento)
        cy.get('#id_captchasonoro').click()
        cy.get('#txtTexto_captcha_serpro_gov_br').click().type(captcha)
        cy.get('#id_submit').click()
    })
})