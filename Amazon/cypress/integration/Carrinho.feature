#language: pt

Funcionalidade: Carrinho
  
    Cenario: Adicionar produto ao carrinho de compras com sucesso
        Dado que eu estou na página inicial do e-commerce
        Quando eu abrir a página de um produto
        E clicar em adicionar produto ao carrinho de compras
        Entao o produto deve aparecer no meu carrinho de compras

    Cenario: Remover produtos do carrinho de compras com sucesso
        Dado que eu estou na página do carrinho de compras
        Quando eu clicar em remover produto do carrinho de compras
        Entao o produto deve ser removido do meu carrinho de compras