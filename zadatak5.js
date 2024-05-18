document.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        zadatak1();
      }
});
function zadatak5() {
    document.getElementById("ispis").innerHTML = "";
    let x = document.getElementById("x0").value;
    if(x >= -1 && x < 0) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = 100;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            //x^2 + 2cosx + 3 sqrt(x+1) = 0
            funkcija = (Math.pow(x,2) + 2*Math.cos(x) + 3*Math.sqrt(Number(x)+1));
            derivacija = (2*x - 2*Math.sin(x) + ((3/2)*(1/(Math.sqrt((Number(x)+1)))))); //daje infinity
            console.log(x, prosliX, funkcija, derivacija);
            prosliX = x;
            x = x - funkcija / derivacija;
            razlika = Math.abs(x-prosliX);
            document.getElementById("ispis").innerHTML += 
                "<p>Iteracija: "+n+"</p>"
                +"<p>x: "+x+"</p>"
                +"<p>Vrijednost funkcije: "+funkcija+"</p>"
                +"<p>Vrijednost derivacije: "+derivacija+"</p><br>";
        }
        document.getElementById("ispis").innerHTML += 
                "<p>Iteracija: "+n+"</p>"
                +"<p>x: "+x+"</p>"
                +"<p>Vrijednost funkcije: "+funkcija+"</p>"
                +"<p>Vrijednost derivacije: "+derivacija+"</p><br>";
        document.getElementById("ispis").innerHTML += "<br><p>konacni reuzultat: "+x+"<br>"
    }
    else {
        document.getElementById("ispis").innerHTML = "Upisana pocetna vrijednost nije iz zadanog intervala."; 
    }
}