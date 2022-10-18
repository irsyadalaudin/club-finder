class SearchBar extends HTMLElement {                           // kita membuat class SearchBar dengan mewarisi sifat HTMLElement.
    connectedCallback() {                                       // Kemudian kita implementasi method connectedCallback() dan membuat fungsi render() (DI KOLOM 16)
        this.render();                                          // Lalu, panggil fungsi render() di dalam connectedCallback().
    }

    set clickEvent(event) {                                     // Dikarenakan elemen ini terdapat elemen <button> (DI KOLOM 20) yang harus memiliki sebuah event ketika ia ditekan, maka kita harus menyediakan setter 'this._clickEvent = event;'
        this._clickEvent = event;                               // Gunanya adalah menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
        this.render();
    }
                                                                // Pada berkas main.js,
    get value() {                                               // kita juga memanfaatkan value dari element <input> (DI KOLOM 19) untuk mendapatkan kata kunci pencarian club.
        return this.querySelector('#searchElement').value;      // Agar mudah mendapatkan nilai value dari elemen <input> yang terdapat pada search bar,
    }                                                           // kita buat fungsi getter yang mengembalikan nilai value dari elemen <input> tersebut.

                                                                // Kemudian kita membuat fungsi render()
    render() {                                                  // Di dalam fungsi render() kita ambil elemen yang dibutuhkan untuk ditampilkan dari berkas index.html
        this.innerHTML = `
        <div id='search-container' class='search-container'>
            <input placeholder='Search football club' id='searchElement' type='search'>
            <button id='searchButtonElement' type='submit'>Search</button>
        </div>
        `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);         // Lalu, kita terapkan this._clickEvent sebagai event handler pada element <button> (DI KOLOM 15)
    }
}

customElements.define('search-bar', SearchBar);                 // Lalu di akhir berkasnya, jangan lupa untuk definisikan custom element yang kita buat agar dapat digunakan pada DOM.