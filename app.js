/* DEFAULT
document.addEventListener('DOMContentLoaded', main);
*/


/* 53. LATIHAN: MODULE
import main from './src/script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
*/


/* 12. SOLUSI: */
import './src/script/component/app-bar.js'               // , supaya kode pada berkas app-bar.js tereksekusi, maka berkas tersebut di-impor pada berkas ini di app.js seperti berikut ini.
import main from './src/script/view/main.js';

document.addEventListener('DOMContentLoaded', main);