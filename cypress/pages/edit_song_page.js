import ViewSongPage from "./view_song_page";

class EditSongPage {

    #title = "";
    #artist = "";
    #genre = "";
    #album = "";
    #albumImageUrl = "";
    #youtubeId = "";
    #tab = "";
    #lyrics = "";
    #buttonEditSong = ""

    constructor(){
        this.#title = cy.get('input[aria-label="Title"]');
        this.#artist = cy.get('input[aria-label="Artist"]');
        this.#genre = cy.get('input[aria-label="Genre"]');
        this.#album = cy.get('input[aria-label="Album"]');
        this.#albumImageUrl = cy.get('input[aria-label="Album Image Url"]');
        this.#youtubeId = cy.get('input[aria-label="YouTube ID"]');
        this.#tab = cy.get('textarea[aria-label="Tab"]');
        this.#lyrics = cy.get('textarea[aria-label="Lyrics"]');
        this.#buttonEditSong = cy.get("button.btn")
    }

    getTitle(){
        return this.#title;
    }

    getArtist(){
        return this.#artist;
    }

    getGenre(){
        return this.#genre;
    }

    getAlbum(){
        return this.#album;
    }

    getAlbumImageUrl(){
        return this.#albumImageUrl;
    }

    getYoutubeId(){
        return this.#youtubeId;
    }

    getTab(){
        return this.#tab;
    }

    getLyrics(){
        return this.#lyrics;
    }

    getButtonEditSong(){
        return this.#buttonEditSong;
    }

    fillSongInformation(title, artist, genre, album, albumImageUrl, youtubeId, tab, lyrics){
        this.#title.focus()
        this.#title.type(title);
        this.#artist.focus()
        this.#artist.type(artist);
        this.#genre.focus()
        this.#genre.type(genre);
        this.#album.focus()
        this.#album.type(album);
        this.#albumImageUrl.focus()
        this.#albumImageUrl.type(albumImageUrl);
        this.#youtubeId.focus()
        this.#youtubeId.type(youtubeId);
        this.#tab.focus()
        this.#tab.type(tab);
        this.#lyrics.focus()
        this.#lyrics.type(lyrics);
    }

    clearSongInformation(){
        this.#title.clear(title);
        this.#artist.clear(artist);
        this.#genre.clear(genre);
        this.#album.clear(album);
        this.#albumImageUrl.clear(albumImageUrl);
        this.#youtubeId.clear(youtubeId);
        this.#tab.clear(tab);
        this.#lyrics.clear(lyrics);
    }

    editSong(){
        this.#buttonEditSong.click();
        return new ViewSongPage();
    }
}

export default EditSongPage;