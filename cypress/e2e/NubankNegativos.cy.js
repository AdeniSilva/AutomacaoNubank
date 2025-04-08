describe('Acessar site do Nubank', () => {
    it(' Tentativa de abrir conta sem passa email', () => {
      cy.visit('https://www.nubank.com.br');
      cy.get('#cpf').type('789.363.323-92')
      cy.get('.chakra-button > .chakra-stack > .chakra-text').click()
      cy.get('#name').type('Letícia Fátima da Silva')
      cy.get('#phone').type('(81) 98779-1017')
      cy.get('.chakra-checkbox__control').click()
      cy.screenshot('campos em branco')
    });
  });       
