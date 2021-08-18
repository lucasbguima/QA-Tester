// 1- Se a página está carregando corretamente a home page

Given(/^that the user wants to enter on the coodesh homepage$/, () => {
});

When(/^user acess the coodesh home page$/, () => {
	cy.visit('https://beta.coodesh.com/');
});

Then(/^the coodesh home page needs to load sucessfully$/, () => {
	cy.url().should('eq','https://beta.coodesh.com/')
});

// 2- Navegar pela página e ir ao sistema de vagas no menú superior;
Given(/^that the user is on the coodesh home page$/, () => {
	cy.visit('https://beta.coodesh.com/');
});

When(/^user clicks on the job openings section$/, () => {
	cy.get(':nth-child(4) > .nav-link').click()
});

Then(/^the job openings page needs to load sucessfully$/, () => {
	cy.url().should('eq','https://beta.coodesh.com/vagas')
});

// 3- Um vez na tela de vagas, nosso sistema de teste automatizado 
// terá que buscar por uma empresa onde terá um ou mais resultados de vagas;

Given(/^that the user is on the job openings page$/, () => {
	cy.visit('https://beta.coodesh.com/vagas');
});

When(/^user searchs for "([^"]*)" company in the category field$/, (company) => {
	cy.get(':nth-child(1) > .js-focus-state > .input-group > .form-control').type(company)
	cy.get('#content > div.bg-light > div > form').submit()
	cy.reload()
});

Then(/^the page needs load the "([^"]*)" job openings sucessfully$/, (company) => {
	cy.url().should('eq','https://beta.coodesh.com/vagas?search='+String(company))
});

// 4 - 4- Depois obter o resultado, 
// deveremos abrir a vaga e revisar se o carregamento é realizado com sucesso ou não;

Given(/^that the user searched the "([^"]*)" company job openings$/, (company) => {
	cy.visit('https://beta.coodesh.com/vagas?search='+String(company));
});

When(/^user clicks on the company job opening result$/, () => {
	cy.get('#content > div.space-2.container > a:nth-child(2)').click();
});

Then(/^the company job opening page needs load sucessfully$/, () => {
	cy.url().should('contain','https://beta.coodesh.com/vagas/')
	.and('to.not.equal','https://beta.coodesh.com/vagas');
});

// 5- Por último, precisamos saber se o sistema de candidatar está funcionando e 
// para isso é necessário clicar no botão Candidatar-se e revisar se abriu o modal corretamente.

Given(/^that the user is on the company job opening result page$/, () => {
	cy.visit('https://beta.coodesh.com/vagas/fullstack-developer-025020');
});

When(/^user clicks on the apply button$/, () => {
	cy.get('.d-flex > .d-inline > .btn').click();
});

Then(/^the apply form needs load sucessfully$/, () => {
	cy.get('body').should('to.have.class','modal-open');
});

