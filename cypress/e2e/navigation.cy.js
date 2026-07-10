/// <reference types="cypress" />

describe('Navigation Menu', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should navigate to Products page', () => {
        cy.contains('Products').click()
        cy.url().should('include', '/products')
    })

    it('Should navigate to Cart page', () => {
        cy.contains('Cart').click()
        cy.url().should('include', '/view_cart')
    })

    it('Should navigate to Signup/Login page', () => {
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
    })
})