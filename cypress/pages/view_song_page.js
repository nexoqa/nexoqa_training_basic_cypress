import EditSongPage from "./edit_song_page";

class ViewSongPage {

    #editButton = "";
    #title = ""


    constructor(){
        this.#editButton = cy.get('div.container a.btn');
        this.#title = cy.get('div.song-title');
    }

    getEditButton(){
        return this.#editButton;
    } 
    
    openEditSongPage(){
        this.#editButton.click();
        return new EditSongPage();  
    }

    getTitle(){
        return this.#title;
    }

}

export default ViewSongPage;