import HomePage from "../pages/home_page"

 
describe('template spec', () => {
  it('click on add button', () => {
    cy.visit('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com')
    cy.get('a[href="#/songs/create"]').click()
  })

  it('validate quantity of songs', () => {
    cy.visit('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com')
    cy.get('div.song').should('have.length',5)
  })

  it('click on add button with Page Object', () => {
    cy.visit('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com')
    var homePage = new HomePage();
    homePage.openAddSongPage();
  })
})