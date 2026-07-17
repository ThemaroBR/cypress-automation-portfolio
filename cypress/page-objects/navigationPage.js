class NavigationPage {

    clickProducts() {
        cy.contains('.navbar-nav a', 'Products').click()
    }

    clickCart() {
        cy.contains('.navbar-nav a', 'Cart').click()
    }

    clickSignupLogin() {
        cy.contains('.navbar-nav a', 'Signup / Login').click()
    }

    clickContactUs() {
        cy.contains('.navbar-nav a', 'Contact us').click()
    }
}

export default new NavigationPage()