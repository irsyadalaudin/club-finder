/* (II) 14. SOLUSI: MEMBUAT club-item COMPONENT
class ClubItem extends HTMLElement {                                                // Pada berkas club-item.js, kita buat class ClubItem dengan mewarisi sifat HTMLElement.
    set club(club) {                                                                // Kemudian kita buat 2 (dua) fungsi di dalamnya yaitu setter club (DI KOLOM 3), dan render (DI KOLOM 8)    // Kemudian kita deklarasikan fungsi setter club dan fungsi render (DI KOLOM 4, 5).
        this._club = club;                                                          // Fungsi setter club berfungsi untuk menetapkan nilai club ke properti this._club    // yang nantinya akan digunakan pada fungsi render untuk menampilkan data individual club berdasarkan hasil pencarian.    // jadi, kita sesuaikan kode di dalam fungsi setter club menjadi seperti ini: (DI KOLOM 4, 5)                
        this.render()
    }
                                                                                    // Lalu lakukan copy template html yang berada pada fungsi renderResult di berkas src -> script -> view -> main.js.
    render() {                                                                      // Kemudian, lakukan paste template html untuk dilakukan assignment pada properti this.innerHTML di dalam fungsi render(). (DI KOLOM 10-15)    // Lalu, kita sesuaikan kembali properti-properti yang digunakan pada html template menjadi seperti ini:
        this.innerHTML = `
            <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
            <div class="club-info">
                <h2>${this._club.name}</h2>
                <p>${this._club.description}</p>
            </div>
        `;
    }
}
                                                                                    // Karena pada properti this._club-lah properti atau data dari objek club disimpan.
customElements.define('club-item', ClubItem);                                       // Kemudian pada akhir berkas club-item.js jangan lupa untuk definisikan custom element yang kita buat agar dapat digunakan pada DOM. (DI KOLOM 19)
*/


/* (II) 22a. SOLUSI: MENERAPKAN SHADOW DOM PADA club-item */
class ClubItem extends HTMLElement {
    constructor() {                                                                 // Pada berkas ClubItem buat sebuah constructor dan terapkan Shadow DOM di dalamnya (DI KOLOM 25-28)
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set club(club) {
        this._club = club;
        this.render()
    }
                                                                                    // Seperti biasa jangan lupa untuk mengubah this.innerHTML menjadi this.shadowDOM.innerHTML ya. (DI KOLOM 36)
    render() {                                                                      // Selanjutnya buka kembali berkas src -> styles -> clublist.css dan pindahkan styling berikut:    // Sesuaikan kembali selector pada styling tersebut menjadi seperti ini: (DI KOLOM 37-69)
        this.shadowDOM.innerHTML = `
            <style>
                club-item {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
            
                club-item .fan-art-club {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
            
                .club-info {
                    padding: 24px;
                }
            
                .club-info > h2 {
                    font-weight: lighter;
                }
            
                .club-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show
                }
            </style>

            <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
            <div class="club-info">
                <h2>${this._club.name}</h2>
                <p>${this._club.description}</p>
            </div>
        `;
    }
}

customElements.define('club-item', ClubItem);