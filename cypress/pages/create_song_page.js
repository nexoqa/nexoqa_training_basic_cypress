class CreateSongPage {

    #title = "";
    #artist = "";
    #genre = "";
    #album = "";
    #albumImageUrl = "";
    #youtubeId = "";
    #tab = "";
    #lyrics = "";
    #buttonCreateSong = ""

    constructor(){
        this.#title = cy.get("#sngTitle");
        this.#artist = cy.get("#sngArtist");
        this.#genre = cy.get("#sngGenre");
        this.#album = cy.get("#sngAlbum");
        this.#albumImageUrl = cy.get("#sngAlbumImg");
        this.#youtubeId = cy.get("#sngYoutube");
        this.#tab = cy.get("#sngTab");
        this.#lyrics = cy.get("#sngLyrics");
        this.#buttonCreateSong = cy.get("#sngBtn")
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

    getButtonCreateSong(){
        return this.#buttonCreateSong;
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

    createSong(){
        this.#buttonCreateSong.click();
    }
}

export default CreateSongPage;