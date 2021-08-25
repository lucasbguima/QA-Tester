#language: pt
Funcionalidade: Pagamentos

@focus
Cenario: Realizar pagamento com cartão de crédito
    Dado que o usuário acessou a página de pagamentos
    Quando o usuário preencher os dados do formulário de pagamento
    E selecionar pagamento com cartão de crédito
    E confirmar o pagamento
    Entao a página deve redirecionar para compra aprovada com sucesso

Cenario: Realizar pagamento com cartão de débito
    Dado que o usuário acessou a página de pagamentos
    Quando o usuário preencher os dados do formulário de pagamento
    E selecionar pagamento com cartão de débito
    E confirmar o pagamento
    Entao a página deve redirecionar para compra aprovada com sucesso

Cenario: Realizar pagamento com débito em conta
    Dado que o usuário acessou a página de pagamentos
    Quando o usuário preencher os dados do formulário de pagamento
    E selecionar pagamento com débito em conta
    E confirmar o pagamento
    Entao a página deve redirecionar para compra aprovada com sucesso