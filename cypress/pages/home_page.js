import CreateSongPage from '../pages/create_song_page'
import ViewSongPage from '../pages/view_song_page'

class HomePage{

  #addButton = "";
  #songs = []


  constructor(){
    this.#addButton = cy.get('a[href="#/songs/create"]');
    this.#songs = cy.get('div.song');
  }

  viewSong(title){
    this.#songs.contains(title).siblings("a.btn").click();
    return new ViewSongPage()
  }

  getAddButton(){
    return this.#addButton;
  }

  openAddSongPage(){
    this.#addButton.click();
    return new CreateSongPage();
  }


}

export default HomePage;