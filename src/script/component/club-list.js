/* (II) 13. SOLUSI: MEMBUAT club-bar COMPONENT
import './club-item.js';                                                       // (INI TERAKHIR) Oh ya! Dikarenakan pada berkas ini kita menggunakan custom elemen <club-item> (kita akan membuat custom elemen ini nanti pada club-item.js), maka kita perlu melakukan impor custom element dari berkas club-item.js ke berkas club-list.js ini
class ClubList extends HTMLElement {                                           // Langkah pertama kita buat custom element <club-list> terlebih dahulu. Pada berkas club-list.js, kita buat class ClubList dengan mewarisi sifat HTMLElement.
    set clubs(clubs) {                                                         // Kemudian kita buat 2 (dua) fungsi di dalamnya yaitu setter clubs, dan render (DI KOLOM 7)
        this._clubs = clubs;
        this.render();
    }
    
    render() {                                                                 // Kemudian kita buat fungsi render.
        this.inner = '';
        this._clubs.forEach(club => {                                          // kita lakukan proses perulangan menggunakan fungsi forEach pada properti this._clubs (DI KOLOM 3)
            const clubItemElement = document.createElement('club-item')        // Pada setiap iterasinya (perulangannya), kita akan mendapatkan individual club dan kita buat custom element <club-item> secara langsung. // Setiap elemen <club-item> yang terbuat akan menjadi child element dari element <club-list> ini.  // <club-item> MENJADI <li> YAITU, CHILD ELEMENT DARI <club-list> <ul>
            clubItemElement.club = club;
            this.appendChild(clubItemElement);
        });
    }
                                                                               // Perlu satu fungsi lagi pada custom element ini, yaitu fungsi untuk menangani ketika hasil pencarian mengalami kegagalan atau tidak ditemukkan 'renderError'
    renderError(message) {                                                     // dengan satu buah parameter yang merupakan pesan eror/alasan yang perlu ditampilkan '(message)'
        this.innerHTML = '';                                                   // Untuk template html yang akan ditampilkan, kita dapat lakukan copy dari fungsi fallbackResult() pada berkas src -> script -> view -> main.js.
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;           // Lalu paste pada fungsi renderError() dan ubah clubListElement.innerHTML menjadi this.innerHTML.
    }
}

customElements.define('club-list', ClubList);                                  // Pada akhir berkas club-list.js jangan lupa untuk definisikan custom element yang kita buat agar dapat digunakan pada DOM.
*/


/* (II) 21a. SOLUSI: MENERAPKAN SHADOW DOM PADA club-list
import './club-item.js';
class ClubList extends HTMLElement {
    constructor() {                                                            // MENERAPKAN Shadow DOM pada komponen club list (DI KOLOM 31-34)
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }
    
    render() {
        this.inner = '';
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement('club-item')
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);                       // dan ubah this.appendChild menjadi this.shadowDOM.appendChild.     (DI KOLOM 46)
        });
    }                                                   
                                                                               // ubah seluruh kode this.innerHTML menjadi this.shadowDOM.innerHTML (DI KOLOM 51, 63)
    renderError(message) {                                                     // Kemudian buka berkas src -> styles -> clublist.css dan pindahkan (cut) kode styling dengan selector club-list > .placeholder.    // Lalu tempel (paste) pada nilai this.shadowDOM.innerHTML dengan dibungkus oleh element <style> tepat sebelum element <h2> di dalam fungsi renderError()  (DI KOLOM 52-62)                         
        this.shadowDOM.innerHTML = `
            <style>
                club-list > .placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
            `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('club-list', ClubList);
*/


/* (II) 21b. SOLUSI: MENERAPKAN SHADOW DOM PADA club-list */
import './club-item.js';
class ClubList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }
    
    render() {
        this.inner = '';
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement('club-item')
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);
        });
    }

    renderError(message) {                                                     // Hapus child selector (>) (pada club-list > .placeholder)  beserta kombinatornya, dan sisakan .placeholder sebagai selector dari styling tersebut (DI KOLOM 96)                                    
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
            `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('club-list', ClubList);