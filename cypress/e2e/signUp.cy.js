/// <reference types="cypress" />

import signUpPage from "../page-objects/signUpPage"
import NavigationPage from "../page-objects/navigationPage"

describe('Sign Up Screen', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Add user - Successful', () => {

        NavigationPage.clickSignupLogin()

        signUpPage.enterName('Mário Filho')

        let email = `user${Cypress._.random(100000)}@gmail.com`
        signUpPage.enterEmail(email)

        signUpPage.clickSignUp()

        signUpPage.selectRandomTitle()

        signUpPage.enterPassword('Password@123')

        signUpPage.selectDay('12')

        signUpPage.selectMonth('May')

        signUpPage.selectYear('1999')
    })
})