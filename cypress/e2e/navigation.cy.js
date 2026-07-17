/// <reference types="cypress" />

import NavigationPage from "../page-objects/navigationPage"

describe('Navigation Menu', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should navigate to Products page', () => {
        NavigationPage.clickProducts()
        cy.url().should('include', '/products')
    })

    it('Should navigate to Cart page', () => {
        NavigationPage.clickCart()
        cy.url().should('include', '/view_cart')
    })

    it('Should navigate to Signup/Login page', () => {
        NavigationPage.clickSignupLogin()
        cy.url().should('include', '/login')
    })

    it('Should navigate to Contact us page', () => {
        NavigationPage.clickContactUs()
        cy.url().should('include', '/contact_us')
    })
})