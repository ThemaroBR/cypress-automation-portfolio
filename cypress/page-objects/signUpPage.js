class SignUpPage {

    enterName(name) {
        cy.get('[data-qa="signup-name"]').type(name)
    }

    enterEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email)
    }

    clickSignUp() {
        cy.get('[data-qa="signup-button"]').click()
    }

    selectRandomTitle() {

        cy.get('input[type="radio"]').then(($radios) => {

            const randomIndex = Math.floor(Math.random() * $radios.length)

            cy.wrap($radios[randomIndex]).check({ force: true })

        })
    }

    enterPassword(password) {
        cy.get('[data-qa="password"]').type(password)
    }

    selectDay(day) {
        cy.get('#days').select(day)
    }

    selectMonth(month) {
        cy.get('#months').select(month)
    }

    selectYear(year) {
        cy.get('#years').select(year)
    }
}
export default new SignUpPage()