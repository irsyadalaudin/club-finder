/* (II) 13. SOLUSI: MEMBUAT search-bar COMPONENT
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
*/


/* (II) 20. SOLUSI: MENERAPKAN SHADOW DOM PADA search-bar */
class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;                               
        this.render();
    }
                                                                
    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;      
    }

    render() { 
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }
      
            .search-container > input {
                width: 75%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid cornflowerblue;
                font-weight: bold;
            }
      
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid cornflowerblue;
            }
      
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
      
            .search-container > input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }
      
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: cornflowerblue;
                color: white;
                border: 0;
                text-transform: uppercase;
            }
      
            @media screen and (max-width: 550px) {
                .search-container {
                    flex-direction: column;
                    position: static;
                }
      
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
      
                .search-container > button {
                    width: 100%;
                }
            }
        </style>

        <div id='search-container' class='search-container'>
            <input placeholder='Search football club' id='searchElement' type='search'>
            <button id='searchButtonElement' type='submit'>Search</button>
        </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);