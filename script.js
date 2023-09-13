
function hitung1 () {

  var sisi = parseFloat(document.getElementById ("sisi").value);

  var luas = sisi * sisi;

  document.getElementById("luas").textContent = luas;
  
  window.location.href = "index2.html?luas=" + luas;}

  function hitung2 () {

    var sisi2= parseFloat(document.getElementById ("sisi2").value);

    var keliling2 = 4 * sisi2;
  
    document.getElementById("keliling2").textContent = keliling2;
    
    window.location.href = "index3.html?=" + keliling2;}


