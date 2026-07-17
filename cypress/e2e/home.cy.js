/// <reference types="cypress" />

describe('Home Page tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('URL validation', () => {
        cy.url().should('eq', 'https://automationexercise.com/')
    })

    it('Title validation', () => {
        cy.title().should('eq', 'Automation Exercise')
    })

    it('Should display the logo', () => {
        cy.get('img[alt="Website for automation practice"]').should('be.visible')
    })

    it('Should display the main navigation bar', () => {
        cy.get('.nav.navbar-nav').should('be.visible')
    })
}) 
