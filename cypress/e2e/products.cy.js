/// <reference types="cypress" />

import NavigationPage from "../page-objects/navigationPage"

describe('Products', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('View products', () => {

        NavigationPage.clickProducts()

        cy.get('#search_product').clear().type('Jeans')
        cy.get('#submit_search').click()

        
    })


})