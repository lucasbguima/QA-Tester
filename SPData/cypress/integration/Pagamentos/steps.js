// Data Acess - Dados de Acesso Fictícios
var url = "https://pagseguro.uol.com.br/checkout/nc/sender-identification.jhtml?t=6f96b76bec4816db6fe7aba1e713f9ec5fa0ad1e98c63846&e=true"
var email = "teste@sandbox.pagseguro.com.br"
var cartao = 4111111111111111
var validade = 1230
var cvv = 123
var cpf = 83840297095
var ddd = 11
var nascimento = 13121995
var celular = 998000035

//Scenario: Realizar pagamento com cartão de crédito

Given(/^que o usuário acessou a página de pagamentos$/, () => {
	cy.visit(url)
});
When(/^o usuário preencher os dados do formulário de pagamento$/, () => {
	cy.get("#user").type(email)
	cy.get("#hasNotAccount").click()
	cy.get(".mainActionButton pagseguro-button largen").click()
});
When(/^selecionar pagamento com cartão de crédito$/, () => {
});
When(/^confirmar o pagamento$/, () => {
});
Then(/^a página deve redirecionar para compra aprovada com sucesso$/, () => {
});


//Scenario: Realizar pagamento com cartão de débito

Given(/^que o usuário acessou a página de pagamentos$/, () => {
});
When(/^o usuário preencher os dados do formulário de pagamento$/, () => {
});
When(/^selecionar pagamento com cartão de débito$/, () => {
});
When(/^confirmar o pagamento$/, () => {
});
Then(/^a página deve redirecionar para compra aprovada com sucesso$/, () => {
});


//Scenario: Realizar pagamento com débito em conta

Given(/^que o usuário acessou a página de pagamentos$/, () => {
});
When(/^o usuário preencher os dados do formulário de pagamento$/, () => {
});
When(/^selecionar pagamento com débito em conta$/, () => {
});
When(/^confirmar o pagamento$/, () => {
});
Then(/^a página deve redirecionar para compra aprovada com sucesso$/, () => {
});

