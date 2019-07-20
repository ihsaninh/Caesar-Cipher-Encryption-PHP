//ambil elemen dulu gan
const teks = document.getElementById('teks');
const key = document.getElementById('key');
const hasil = document.getElementById('hasil');

//event saat mengetikkan sesuatu
teks.addEventListener('keyup', function() {

	//instansiasi ajax
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if( xhr.readyState == 4 && xhr.status ==200) {
			hasil.innerHTML = xhr.responseText;
		}
	}

	xhr.open('GET', 'ajax/hasil.php?teks=' + teks.value +'&key=' + key.value, true);
	xhr.send();

});
