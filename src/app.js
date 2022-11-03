/* DEFAULT
document.addEventListener('DOMContentLoaded', main);
*/


/* 53. LATIHAN: MODULE
import main from './src/script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
*/


/* (II) 12. SOLUSI: MEMBUAT app-bar COMPONENT
import './script/component/app-bar.js'               // , supaya kode pada berkas app-bar.js tereksekusi, maka berkas tersebut di-impor pada berkas ini di app.js seperti berikut ini.
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
*/


/* (IV) 16. SOLUSI: MENERAPKAN WEBPACK PADA CLUB FINDER */
import './styles/style.css';
import './script/component/app-bar.js';
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);