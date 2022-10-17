class AppBar extends HTMLElement {                    // kita buat class dengan nama AppBar yang mewarisi sifat HTMLElement.
    connectedCallback() {                             // Kemudian di dalam body block classnya, kita implementasi method connectedCallback dan membuat fungsi render. (DI KOLOM 7)
        this.render();                                // Seperti yang sudah kita ketahui, connectedCallback() akan terpanggil ketika element telah diterapkan pada DOM. // Jika kita ingin element ini ketika diterapkan langsung melakukan rendering maka kita dapat memanggil fungsi this.render() di dalam connectedCallback.
    
    }

    render() {                                        // Kemudian di dalam body block classnya, kita buat fungsi render.
        this.innerHTML = `<h2>Club Finder</h2>`;      // Di dalam elemen <header> di index.html terdapat elemen <div> yang menerapkan class “app-bar”. Nah kita copy element di dalam app-bar, dan paste untuk dijadikan nilai pada this.innerHTML di fungsi render().
    
    }
}

customElements.define('app-bar', AppBar);             // Mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM