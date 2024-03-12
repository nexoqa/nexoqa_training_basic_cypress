import CreateSongPage from '../pages/create_song_page'

class HomePage{

  #addButton = "";
  #titleSongs = ""

  constructor(){
    this.#addButton = cy.get('a[href="#/songs/create"]');
    this.#titleSongs = cy.get('div.song-title');
  }

  getAddButton(){
    return this.#addButton;
  }

  openAddSongPage(){
    this.#addButton.click();
    return new CreateSongPage();
  }

  getTitleSongs(){
    return this.#titleSongs;
  }

}

export default HomePage;