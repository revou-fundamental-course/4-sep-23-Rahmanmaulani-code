
function hitung1 () {

  var sisi = parseFloat(document.getElementById ("sisi").value);

  var luas = sisi * sisi;

  document.getElementById("luas").textContent = luas;
}

  function hitung2 () {

    var sisi2= parseFloat(document.getElementById ("sisi2").value);

    var keliling2 = 4 * sisi2;
  
    document.getElementById("keliling2").textContent = keliling2;
    
}

function reset2() {
  // Mengambil elemen paragraf
  var keliling2 = document.getElementById("keliling2");

  // Mengganti konten paragraf dengan teks kosong
  keliling2.textContent = "0";
}

function reset1() {
  // Mengambil elemen paragraf
  var luas = document.getElementById("luas");

  // Mengganti konten paragraf dengan teks kosong
  luas.textContent = "0";
}

