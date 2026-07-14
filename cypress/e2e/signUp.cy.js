/// <reference types="cypress" />

import signUpPage from "../page-objects/signUpPage"
import NavigationPage from "../page-objects/navigationPage"

describe('Sign Up Screen', () => {

    beforeEach(() => {
        NavigationPage.visit()
    })

    it.only('Should create New User', () => {
        NavigationPage.clickLogin()
    })
})