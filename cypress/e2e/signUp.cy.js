/// <reference types="cypress" />

import signUpPage from "../page-objects/signUpPage"
import NavigationPage from "../page-objects/navigationPage"

describe('Sign Up Screen', () => {

    it('Should create New User', () => {
        NavigationPage.clickLogin()
    })

    it('Should type User Name', () => {
        signUpPage.enterName('Mário Filho')
    })
})