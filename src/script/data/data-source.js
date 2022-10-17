/* DEFAULT
function DataSource(onSuccess, onFailed) {
  	this.onSuccess = onSuccess;
  	this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
		const filteredClubs = clubs.filter(function (club) {
    	return club.name.toUpperCase().includes(keyword.toUpperCase());
  	};

  	if (filteredClubs.length) {
    	this.onSuccess(filteredClubs);
  	} else {
    	this.onFailed(keyword + ' is not found');
  	}
	
};
*/


/* 8. SOLUSI: TEMPLATE LITERALS
function DataSource(onSuccess, onFailed) {
	this.onSuccess = onSuccess;
	this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
  const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

  if (filteredClubs.length) {
	  this.onSuccess(filteredClubs);
  } else {
	  this.onFailed(`${keyword} is not found`)
  }
};
*/


/* 22. SOLUSI: ARROW FUNCTION
function DataSource(onSuccess, onFailed) {
	this.onSuccess = onSuccess;
	this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
  const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

  if (filteredClubs.length) {
	  this.onSuccess(filteredClubs);
  } else {
	  this.onFailed(`${keyword} is not found`)
  }
};
*/


/* 32. LATIHAN: CLASS
class DataSource {							// KETIKA MERUBAH MENJADI CLASS DI JS (disini pakai constructor) MENGGANTI NYA DISINI, YANG SEBELUMNYA DARI function (DI KOLOM 41)
	constructor(onSuccess, onFailed) { 
		this.onSuccess = onSuccess;
		this.onFailed = onFailed;
	}

	searchClub (keyword) {					// KETIKA MERUBAH MENJADI CLASS DI JS (disini pakai constructor) MENGGANTI NYA DISINI, YANG SEBELUMNYA DARI function (DI KOLOM 46)
		const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
		
		if (filteredClubs.length) {
			this.onSuccess(filteredClubs);
		} else {
			this.onFailed(`${keyword} is not found`)
		}
	}
}
*/


/* 46. LATIHAN: PROMISE
class DataSource {
	static searchClub (keyword) {
		return new Promise((resolve, reject) => {
			const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
		
			if (filteredClubs.length) {
				resolve(filteredClubs);
			} else {
				reject(`${keyword} is not found`)
			}
		})
	}
}

const executorFucntion = (resolve, reject) => {
	const filteredClubs = true;

	if (filteredClubs) {
		resolve('Klub berhasil ditemukan')
	} else {
		reject('Klub tidak ditemukan')
	}
}

const handlerSuccess = resolvedValue => {
	console.log(resolvedValue);
}

const handlerRejected = rejectionValue => {
	console.log(rejectionValue);
}

const filteredClubs = new Promise (executorFucntion);
*/


/* 53. LATIHAN: MODULE */
import clubs from './clubs.js'

class DataSource {
	static searchClub (keyword) {
		return new Promise((resolve, reject) => {
			const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
		
			if (filteredClubs.length) {
				resolve(filteredClubs);
			} else {
				reject(`${keyword} is not found`)
			}
		})
	}
}

const executorFucntion = (resolve, reject) => {
	const filteredClubs = true;

	if (filteredClubs) {
		resolve('Klub berhasil ditemukan')
	} else {
		reject('Klub tidak ditemukan')
	}
}

const handlerSuccess = resolvedValue => {
	console.log(resolvedValue);
}

const handlerRejected = rejectionValue => {
	console.log(rejectionValue);
}

const filteredClubs = new Promise (executorFucntion);

export default DataSource;


/*  BISA MENGGUNAKAN YANG ATAS (DI KOLOM 248-257) MEMAKAI PENYESUAIAN PENGUBAHAN METHOD searchClub MENJADI STATIC & callback MENJADI PROMISE
        ATAU PAKAI   YANG DI BAWAH (DI KOLOM 262-268) MEMAKAI async/await

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value)
        } catch (message) {
            fallbackResult(message)
        }
    };
    */