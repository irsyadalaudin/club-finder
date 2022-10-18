/* DEFAULT
var main = function () {
    var searchElement = document.querySelector('#searchElement');
    var buttonSearchElement = document.querySelector('#searchButtonElement');
    var clubListElement = document.querySelector('#clubList');
  
    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };
  
    var renderResult = function (results) {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            var name = club.name;
            var fanArt = club.fanArt;
            var description = club.description;
  
            var clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
  
            clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="club-info">\n' +
                    '<h2>' + name + '</h2>\n' +
                    '<p>' + description + '</p>' +
                '</div>';
            clubListElement.appendChild(clubElement);
        });
    };
  
    var fallbackResult = function (message) {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
    };
  
        buttonSearchElement.addEventListener('click', onButtonSearchClicked);
  };
*/


/* 5. LATIHAN DEKLARASI VARIABLE
const main = function () {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');
  
    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };
  
    const renderResult = function (results) {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const name = club.name;
            const fanArt = club.fanArt;
            const description = club.description;
  
            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
  
            clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="club-info">\n' +
                    '<h2>' + name + '</h2>\n' +
                    '<p>' + description + '</p>' +
                '</div>';
            clubListElement.appendChild(clubElement);
        });
    };
  
    const fallbackResult = function (message) {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
    };
  
        buttonSearchElement.addEventListener('click', onButtonSearchClicked);
  };
*/


/* 8. LATIHAN TEMPLATE LITERALS
const main = function () {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = function () { 
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    const renderResult = function (results) {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const name = club.name;
            const fanArt = club.fanArt;
            const description = club.description;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = function (message) {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
*/


/* 13. DESTRUCTURING OBJECT
const main = function () {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = function () { 
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    const renderResult = function (results) {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = function (message) {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
*/


/* 23. SOLUSI ARROW FUNCTION
const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = () => { 
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    const renderResult = results => {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = message => {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
*/


/* 32. SOLUSI: CLASS
const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = () => { 
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    const renderResult = results => {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = message => {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
*/


/* 46. LATIHAN: PROMISE
const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = message => {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
*/


/* 53. LATIHAN: MODULE
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');    

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
            // console.log(clubListElement);
        });
    };
    
    const fallbackResult = message => {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;
*/


/* (II) 13. SOLUSI: MEMBUAT search-bar COMPONENT
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    // const buttonSearchElement = document.querySelector('#searchButtonElement');       // kita tidak membutuhkan deklarasi variabel buttonSearchElement,
    const clubListElement = document.querySelector('club-list');                         // karena sekarang kita dapat mengakses button pada CUSTOM COMPONENT yang telah kita buat sebelumnya, yakni melalui searchElement.

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
        clubListElement.innerHTML = '';
        results.forEach(function (club) {
            const {name, fanArt, description} = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');
            
            clubElement.innerHTML =`
                <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;
            clubListElement.appendChild(clubElement);
        });
    };
    
    const fallbackResult = message => {
        clubListElement.innerHTML = '';
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
    
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main; */


/* (II) 14. SOLUSI: MEMBUAT club-item COMPONENT */
import '../component/club-list.js';                                     // Karena kita menggunakan elemen <club-list> pada berkas main.js, maka kita perlu melakukan impor berkas club-list.js pada berkas main.js.
import '../component/search-bar.js';                                
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');      // kita tidak membutuhkan deklarasi variabel buttonSearchElement,
    const clubListElement = document.querySelector('club-list');     // karena sekarang kita dapat mengakses button pada CUSTOM COMPONENT yang telah kita buat sebelumnya, yakni melalui searchElement.

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {                                // Lalu kita sesuaikan juga kode yang terdapat di dalam fungsi renderResult. Hapus seluruh logika yang ada di dalam fungsi tersebut.
        clubListElement.clubs = results;                             // Kita cukup menggantinya dengan seperti ini: (DI KOLOM 394-397)
    };
    
    const fallbackResult = message => {                              // Sesuaikan juga kode yang terdapat pada fungsi fallbackResult,
        clubListElement.renderError(message);                        // karena kita sudah membuat fungsi renderError() pada ClubList,
    }                                                                // maka penggunaanya cukup dilakukan seperti ini: (DI KOLOM 398-400)
    
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;