const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [                                  // PLUGIN DIBUAT DENGAN javascript class
        new HtmlWebpackPlugin({                 // MENGAKSES PLUGIN MELALUI OBJEK 'WEBPACK'
            template: './src/index.html',       // YANG DIPAKAI DISINI ADALAH PLUGIN (DI LUAR STANDAR YANG DISEDIAKAN) HARUS DIPASANG MELALUI npm TERLEBIH DAHULU. CONTOHNYA PLUGIN YANG BANYAK DIGUNAKAN UNUTK MEMBUAT BERKAS HTML PADA WEBPACK ADALAH html-webpack-plugin
            filename: 'index.html'              // Pada contoh di atas, melalui html-webpack-plugin, webpack akan menghasilkan berkas HTML untuk proyek kita dan memasukkan berkas yang sudah dibundel.
        })
    ]
}

/*  NOTES
        -Entry:   Titik awal atau berkas utama yang akan dianalisa oleh webpack dan membentuk dependency graph.
        -Output:  Berkas javascript statis yang akan dihasilkan dari proses bundling berdasarkan entry point.
        -Loaders: Transformasi tools pada webpack, yang akan memproses berkas selain JavaScript atau JSON yang diimpor menjadi format yang dapat digunakan ke tahap produksi.
        -Plugin:  Tools untuk melakukan optimasi bundle, manajemen aset dsb.
        -Mode:    Kondisi atau tingkatan sebagai acuan optimasi yang perlu diterapkan dalam prosesnya. Terdapat tiga mode yang dapat diterapkan, yaitu production, development, dan none.
*/