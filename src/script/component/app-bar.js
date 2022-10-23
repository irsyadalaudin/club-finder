/* (II) 12. SOLUSI: MEMBUAT app-bar COMPONENT
class AppBar extends HTMLElement {                    // kita buat class dengan nama AppBar yang mewarisi sifat HTMLElement.
    connectedCallback() {                             // Kemudian di dalam body block classnya, kita implementasi method connectedCallback dan membuat fungsi render. (DI KOLOM 7)
        this.render();                                // Seperti yang sudah kita ketahui, connectedCallback() akan terpanggil ketika element telah diterapkan pada DOM. // Jika kita ingin element ini ketika diterapkan langsung melakukan rendering maka kita dapat memanggil fungsi this.render() di dalam connectedCallback.
    
    }

    render() {                                        // Kemudian di dalam body block classnya, kita buat fungsi render.
        this.innerHTML = `<h2>Club Finder</h2>`;      // Di dalam elemen <header> di index.html terdapat elemen <div> yang menerapkan class “app-bar”. Nah kita copy element di dalam app-bar, dan paste untuk dijadikan nilai pada this.innerHTML di fungsi render().
    }
}

customElements.define('app-bar', AppBar);             // Mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM
*/


/* (II) 19. SOLUSI: MENETAPKAN SHADOW DOM PADA PROYEK CLUB FINDER */
/* */
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
    render() {                                             // jangan lupa pada fungsi render(),
        this.shadowDOM.innerHTML = `<h2>Club Finder</h2>`; // kita ubah 'this.innerHTML' menjadi 'this.shadowDOM.innerHTML'
    }
}

customElements.define('app-bar', AppBar);