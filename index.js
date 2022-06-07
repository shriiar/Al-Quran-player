let surahArray = [], preCal = [], preCall = [], QuranBangla = [];

// this is the enter button press search event
var go = document.getElementById("button-33");
var txt = document.getElementById("search-input");

txt.addEventListener("keypress", function (event) {
	if (event.key == 'Enter')
		go.click();
});

// spinner js
function spinnerControl(remove, add) {
	const spinner = document.getElementById("spinner");
	spinner.classList.remove(remove);
	spinner.classList.add(add);
}

const error = path => {
	spinnerControl("d-block", "d-none");

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	const errorDiv = document.getElementById('error-div');
	errorDiv.innerHTML = "";

	const searchText = document.getElementById('search-input');
	searchText.value = "";

	const showAll = document.getElementById('show-all');
	showAll.innerHTML = "";

	let div = document.createElement('div'), div1 = document.createElement('div');
	if (path == 1) {
		div.innerHTML = `
			<h1 class="text-danger text-center mt-3">No Results Found</h1>
			<p class="text-danger text-center mt-3">Enter a proper surah name</p>
		`
	}
	div1.innerHTML = `
		<div class="d-flex justify-content-center">
			<button class="btn btn-outline-secondary mx-auto" type="button" id="button-33" onclick="Pre_load_Al_Quran_Surahs()">Show All Surahs</button>
		</div>
	`
	errorDiv.appendChild(div);
	errorDiv.appendChild(div1);
}

const searchInput = () => {
	const searchText = document.getElementById('search-input');

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	const errorDiv = document.getElementById('error-div');
	errorDiv.innerHTML = "";

	const showAllSurahs = document.getElementById('show-all-surahs');
	showAllSurahs.innerHTML = "";

	const showAll = document.getElementById('show-all');
	showAll.innerHTML = "";

	if (searchText.value != "" && searchText.value != "-") {
		searchSurah(searchText.value);
	}
	else {
		error(1);
	}
}

const searchSurah = async (searchText) => {
	spinnerControl("d-none", "d-block");

	const searchTextt = document.getElementById('search-input');
	searchTextt.value = "";

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	searchText = searchText.toLowerCase();
	
	let flag = 0;
	
	surahArray = [];
	while (1) {
		console.log(searchText);
		if (flag == 1 || searchText.length == 0) break;
		for (const surah of preCall[0]) {
			let name = surah.englishName.toLowerCase();
			let position = name.search(searchText);
			if (position != -1) {
				flag = 1;
				surahArray.push(surah);
			}
		}
		searchText = searchText.slice(0, searchText.length - 1);
	}
	
	if (flag == 1) {
		showResult1(surahArray);
	}
	else {
		error(1);
	}
}

const Pre_load_Al_Quran_Surahs = () => {

	const showAllSurahs = document.getElementById('show-all-surahs');
	showAllSurahs.innerHTML = "";

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	const showAll = document.getElementById('show-all');
	showAll.innerHTML = "";

	const errorDiv = document.getElementById('error-div');
	errorDiv.innerHTML = "";

	const searchText = document.getElementById('search-input');
	searchText.value = "";


	showResult(preCall[0]);
}

const showResult = data => {
	spinnerControl("d-block", "d-none");
	const showAllSurahs = document.getElementById('show-all-surahs');
	showAllSurahs.innerHTML = "";

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	const showAll = document.getElementById('show-all');
	showAll.innerHTML = "";

	
	for (const surah of data) {
		
		let div = document.createElement('div');
		div.classList.add('surah-div');
		div.innerHTML = `
		<div class="card" id="cus-card">
  			<div class="card-body">
				<p class="card-div">${surah.name}</p>
				<p class="card-div">${surah.englishName}</P>
				<p class="card-div">Ayahs: ${surah.ayahs.length}</P>
				<p class="card-div">Surah No: ${surah.number}</p>
				<p class="card-div">Revelation: ${surah.revelationType}</p>
				<button type="button" onClick="readMore(${surah.number})" id="button-33" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#singleDetails">Translations Arabic & English</button>

				<button type="button" onClick="readMoreBangla(${surah.number - 1})" id="button-33" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#singleDetails">Translations bangla</button>
				<button class="btn btn-primary" id="button-33" onClick="showMore(${surah.number})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Recitation & Translations</button>
			</div>
		</div>
		`
		showAllSurahs.appendChild(div);
	}
}
const showResult1 = data => {
	spinnerControl("d-block", "d-none");
	const showAllSurahs = document.getElementById('show-all-surahs');
	showAllSurahs.innerHTML = "";

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	
	for (const surah of data) {
		
		let div = document.createElement('div'), div1 = document.createElement('div');
		div.classList.add('surah-div');
		div.innerHTML = `
		<div class="card" id="cus-card">
  			<div class="card-body">
				<p class="card-div">${surah.name}</p>
				<p class="card-div">${surah.englishName}</P>
				<p class="card-div">Ayahs: ${surah.ayahs.length}</P>
				<p class="card-div">Surah No: ${surah.number}</p>
				<p class="card-div">Revelation: ${surah.revelationType}</p>
				<button type="button" onClick="readMore(${surah.number})" id="button-33" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#singleDetails">Translations Arabic & English</button>

				<button type="button" onClick="readMoreBangla(${surah.number - 1})" id="button-33" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#singleDetails">Translations bangla</button>



				<button class="btn btn-primary" id="button-33" onClick="showMore(${surah.number})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Recitation & Translations</button>
			</div>
		</div>
		`
		showAllSurahs.appendChild(div);
	}

	const showAll = document.getElementById('show-all');
	let div1 = document.createElement('div')
	div1.innerHTML = `
	<div class="d-flex justify-content-center">
		<button class="btn btn-outline-secondary mx-auto" type="button" id="button-33" onclick="Pre_load_Al_Quran_Surahs()">Show All Surahs</button>
	</div>
	`
	showAll.appendChild(div1);
}

const readMore = async number => {

	const url1 = `https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`;
	const res1 = await fetch(url1);
	const data1 = await res1.json();

	readMoreResult(preCall[0][number - 1].ayahs, data1.data.ayahs, number - 1);
}

const showMore = async number => {
	const url = `https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`;
	const res = await fetch(url);
	const data = await res.json();
	showMoreResult(data.data.ayahs);
}

const readMoreResult = async (data, data1, SurahId) => {

	// console.log(preCall[1][SurahId]);

	const singleModal = document.getElementById('singleDetails');
	singleModal.innerHTML = "";

	const loadingText = document.getElementById('loading-text');
	loadingText.innerHTML = "";

	let div = document.createElement('div');
	div.innerHTML = `
		<button type="button" id="button-33" onClick="clearModal()" class="btn-close fixed-top ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
	`
	singleModal.appendChild(div);
	for (let i = 0; i < data.length; i++) {
		div = document.createElement('div');

		div.innerHTML = `
				<p>${data1[i].text}</p>
				<p>${data[i].text}</p>
			`
		singleModal.appendChild(div);
	}
}

const readMoreBangla = (surahId) => {

	// console.log(preCall[1][surahId].length);
	const singleModal = document.getElementById('singleDetails');
	singleModal.innerHTML = "";

	let div = document.createElement('div');
	div.innerHTML = `
		<button type="button" id="button-33" onClick="clearModal()" class="btn-close fixed-top ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
	`
	singleModal.appendChild(div);
	for (let i = 0; i < preCall[1][surahId].length; i++) {
		div = document.createElement('div');
		div.innerHTML = `
			<p>${preCall[1][surahId][i]}</p>
		`
		singleModal.appendChild(div);
	}
}

const clearModal = () => {
	const singleModal = document.getElementById('singleDetails');
	singleModal.innerHTML = "";
}

const showMoreResult = (data) => {

	const playing = document.getElementById('playing');
	playing.style.display = "block";
	
	const collapseBtn = document.getElementById(`offcanvasBottom`);
	collapseBtn.innerHTML = "";

	let div = document.createElement('div');
	div.classList.add("collapse-btn-div");
	let ayahs = [], ayahText = [];
	for (const ayah of data) {
		ayahs.push(ayah.audio);
		ayahText.push(ayah.text);
	}
	div.innerHTML = `
  	<div class="offcanvas-body small">
		<audio src="" controls id="audio" autoplay></audio>
  	</div>
	`
	let div1 = document.createElement('div');
	collapseBtn.appendChild(div);

	let audio = document.getElementById('audio'), index = 0;


	let ayahIndex = 0;
	change(ayahIndex);
	audio.addEventListener('ended', () => {
		ayahIndex++;

		if (ayahIndex < ayahs.length) {
			change(ayahIndex);
		}
		else {
			ayahIndex = 0;
			playing.style.display = "none";
			change(ayahIndex);
			audio.pause();
		}
	})

	function change(index) {
		audio.src = ayahs[index]
		div1.innerHTML = `
			<h3>${ayahText[index]}</h3>
		`
		collapseBtn.appendChild(div1);
		audio.play();

		document.getElementById('close-button').onclick = function () {
			ayahIndex = ayahs.length;
			playing.style.display = "none";
		}
	}
}

const load_Al_Quran_Surahs = async () => {
	spinnerControl("d-none", "d-block");

	const errorDiv = document.getElementById('error-div');
	errorDiv.innerHTML = "";

	const showAllSurahs = document.getElementById('show-all-surahs');
	showAllSurahs.innerHTML = "";

	const showAll = document.getElementById('show-all');
	showAll.innerHTML = "";

	if (localStorage.getItem('preCall')) {
		preCall = JSON.parse(localStorage.getItem('preCall'));

		Pre_load_Al_Quran_Surahs(preCall[0]);
	}
	else {
		let seconds = 165;
		const loadingText = document.getElementById('loading-text');

		function incrementSeconds() {
			if(seconds == 1) 
			{
				// console.log("GG", seconds);
				loadingText.innerText = "";
				clearInterval(cancel);
			}
			seconds--;
			// console.log(seconds);
			loadingText.innerText = "Please wait, fetching all Surahs with Arabic, English & Bangla Translations. Estimated time: " + seconds + " seconds.";
		}
		
		let cancel = setInterval(incrementSeconds, 1000);

		const url = ('https://api.alquran.cloud/v1/quran/en.asad');
		const res = await fetch(url);
		const data = await res.json();
		for (const surah of data.data.surahs) preCal.push(surah);
		preCall.push(preCal);

		for (let surah = 1; surah <= 114; surah++) {
			let page = 1, dummy = [];
			while (1) {
				const url = `https://alquranbd.com/api/tafheem/suraData/${surah}/${page}`;
				const res = await fetch(url);
				const data = await res.json();

				if (data.length == 0) break;
				for (let surahText = 0; surahText < data.length; surahText++) {
					for (let surahAyah = 0; surahAyah < data[surahText].bn.length; surahAyah++) {
						dummy.push(data[surahText].bn[surahAyah].token_trans);
					}
				}
				page++;
			}
			QuranBangla.push(dummy);
		}

		preCall.push(QuranBangla);

		localStorage.setItem('preCall', JSON.stringify(preCall));
		showResult(preCall[0]);
	}
}
load_Al_Quran_Surahs();