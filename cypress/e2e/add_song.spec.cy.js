import HomePage from "../pages/home_page"

describe('Add new song', () => {
  
  beforeEach(() => {
    cy.request('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com:8081/reset');
  });

  it('Add new song', () => {
    cy.visit('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com')
    var homePage = new HomePage();
    var createSongPage = homePage.openAddSongPage();
    createSongPage.fillSongInformation('Bohemian Rhapsody','Queen','Rock','Bohemian Rhapsody','https://www.thisdayinmusic.com/wp-content/uploads/2018/07/Bohemian-Rhapsody.jpg','fJ9rUzIMcZQ','TAB Song','Letra Song');
    createSongPage.createSong();

    cy.contains('Bohemian Rhapsody').should('exist');

  })
})