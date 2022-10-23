/* (II) 12. SOLUSI: MEMBUAT app-bar COMPONENT
class AppBar extends HTMLElement {                         // kita buat class dengan nama AppBar yang mewarisi sifat HTMLElement.
    connectedCallback() {                                  // Kemudian di dalam body block classnya, kita implementasi method connectedCallback dan membuat fungsi render. (DI KOLOM 7)
        this.render();                                     // Seperti yang sudah kita ketahui, connectedCallback() akan terpanggil ketika element telah diterapkan pada DOM. // Jika kita ingin element ini ketika diterapkan langsung melakukan rendering maka kita dapat memanggil fungsi this.render() di dalam connectedCallback.
    
    }

    render() {                                             // Kemudian di dalam body block classnya, kita buat fungsi render.
        this.innerHTML = `<h2>Club Finder</h2>`;           // Di dalam elemen <header> di index.html terdapat elemen <div> yang menerapkan class “app-bar”. Nah kita copy element di dalam app-bar, dan paste untuk dijadikan nilai pada this.innerHTML di fungsi render().
    }
}

customElements.define('app-bar', AppBar);                  // Mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM
*/


/* (II) 19a. SOLUSI: MENETAPKAN SHADOW DOM PADA <app-bar> COMPONENT
class AppBar extends HTMLElement {
    constructor() {                                        // buat constructor dari class tersebut dan di dalamnya kita tetapkan shadow root
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});    // MELAMPIRKAN SHADOW ROOT PADA SHADOW HOST
    }                                                      // MENGATUR MODE SHADOW DENGAN NILAI OPEN
                                                           // SEBENARNYA TERDAPAT 2 OPSI NILAI YANG DAPAT  DIGUNAKAN DALAM PROPRERTI MODE, YAITU "OPEN" DAN "CLOSED"
    connectedCallback() {
        this.render();
    }
                                                           // Karena kita sudah menerapkan Shadow DOM pada AppBar,
    render() {                                             // jangan lupa pada fungsi render(),  // kita ubah 'this.innerHTML' menjadi 'this.shadowDOM.innerHTML' (DI KOLOM 30)
        this.shadowDOM.innerHTML = `
            <style>
                app-bar {
                    display: block;
                    padding: 16px;
                    width: 100%;
                    background-color: cornflowerblue;
                    color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }
            </style>

            <h2>Club Finder</h2>`;                              // Kemudian buka berkas style -> appbar.css dan pindahkan (cut) seluruh kode yang ada pada berkas tersebut.
    }                                                           // Lalu, tempel (paste) pada nilai this.shadowDOM.innerHTML dengan dibungkus oleh element <style> tepat sebelum element <h2> pada fungsi render() di berkas app-bar.js
}                                                               // (DI KOLOM 30-39)

customElements.define('app-bar', AppBar);
*/


/* (II) 19b. SOLUSI: MENETAPKAN SHADOW DOM PADA <app-bar> COMPONENT */
class AppBar extends HTMLElement {
    constructor() {                                        // buat constructor dari class tersebut dan di dalamnya kita tetapkan shadow root
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});    // MELAMPIRKAN SHADOW ROOT PADA SHADOW HOST
    }                                                      // MENGATUR MODE SHADOW DENGAN NILAI OPEN
                                                           // SEBENARNYA TERDAPAT 2 OPSI NILAI YANG DAPAT  DIGUNAKAN DALAM PROPRERTI MODE, YAITU "OPEN" DAN "CLOSED"
    connectedCallback() {
        this.render();
    }
                                                           // Karena kita sudah menerapkan Shadow DOM pada AppBar,
    render() {                                             // jangan lupa pada fungsi render(),  // kita ubah 'this.innerHTML' menjadi 'this.shadowDOM.innerHTML' (DI KOLOM 30)
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    padding: 16px;
                    width: 100%;
                    background-color: cornflowerblue;
                    color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                h2 {
                    padding: 16px;
                }
            </style>

            <h2>Club Finder</h2>`;                              // Kemudian buka berkas style -> appbar.css dan pindahkan (cut) seluruh kode yang ada pada berkas tersebut.
    }                                                           // Lalu, tempel (paste) pada nilai this.shadowDOM.innerHTML dengan dibungkus oleh element <style> tepat sebelum element <h2> pada fungsi render() di berkas app-bar.js
}                                                               // (DI KOLOM 30-39)

customElements.define('app-bar', AppBar);

/* NOTES */
/* (II) 19b. SOLUSI: MENETAPKAN SHADOW DOM PADA <app-bar> COMPONENT */

// Ups. Pada browser kita dapat melihat title yang ditampilkan pada <app-bar> tampak berantakan.
// Untuk menanganinya,
// kita perlu menyesuaikan kembali style yang diterapkan pada custom element menjadi seperti ini:
// (DI KOLOM 62-81)