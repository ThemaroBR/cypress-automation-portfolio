/// <reference types="cypress" />

describe('Home Page tests', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('URL validation', () => {
        cy.url().should('eq', 'https://automationexercise.com/')
    })

    it('Title validation', () => {
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Logo validation', () => {
        cy.get('img[alt="Website for automation practice"]').should('be.visible')
    })
}) 
