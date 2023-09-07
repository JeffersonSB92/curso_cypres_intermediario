/// <reference types="Cypress" />

describe('Logout', () => {
    it('sucessfully', () => {
      cy.logout()

      cy.get("[data-qa-selector='sign_in_tab']").should('be.visible')
    })
  })