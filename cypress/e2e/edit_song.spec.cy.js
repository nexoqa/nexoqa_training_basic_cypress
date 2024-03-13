import HomePage from "../pages/home_page"

describe('Edit song', () => {
  
  beforeEach(() => {
    cy.request('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com:8081/reset');
  });

  it('Edit song', () => {
    cy.visit('http://ec2-52-212-221-94.eu-west-1.compute.amazonaws.com')
    var homePage = new HomePage();
    var viewSongPage = homePage.viewSong('Nevermind');
    var editSongPage = viewSongPage.openEditSongPage();
    
    editSongPage.getTitle().clear();
    editSongPage.getTitle().type('Nevermind2');
    editSongPage.getTab().type('TAB');
    editSongPage.getLyrics().type('LYRICS');
    viewSongPage = editSongPage.editSong();

    viewSongPage.getTitle().should('include.text',"Nevermind2");
    
  })
})