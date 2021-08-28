// Adicionar Produto ao Carrinho de Compras
Given(/^que eu estou na página inicial do e-commerce$/, () => {
    cy.visit("https://www.amazon.com/")
});
When(/^eu abrir a página de um produto$/, () => {
    cy.get('#desktop-2 > :nth-child(1)> :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
});
When(/^clicar em adicionar produto ao carrinho de compras$/, () => {
    cy.get('#add-to-cart-button').click()
});
Then(/^o produto deve aparecer no meu carrinho de compras$/, () => {
    cy.get('#nav-cart-count').should("have.text","1")
    cy.get('#attach-sidesheet-view-cart-button').click()
});

// Remover produtos do carrinho de compras com sucesso
Given(/^que eu estou na página do carrinho de compras$/, () => {
    cy.get('h1').should("contain","Shopping Cart")
});
When(/^eu clicar em remover produto do carrinho de compras$/, () => {
    cy.get('#activeCartViewForm > :nth-child(1n) > :nth-child(3n) > :nth-child(1n) > :nth-child(1n) > :nth-child(2n) > :nth-child(2n) > :nth-child(3n) > :nth-child(1) ').click()
});
Then(/^o produto deve ser removido do meu carrinho de compras$/, () => {
    cy.get('#nav-cart-count').should("have.text","0")
});

