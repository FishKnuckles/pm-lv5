document.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        zadatak1();
      }
});
function zadatak7() {
    document.getElementById("ispis").innerHTML = "";
    let x = document.getElementById("x0").value;
    console.log(x);
    if(x >= -1 && x <= 0) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = 100;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            //2sin(cos(3x^2)) - log(2x^2 + 1) = 0
            funkcija = ((2*Math.sin(Math.cos(3*Math.pow(x,2)))) - Math.log10(2*Math.pow(x,2) + 1));
            derivacija = ((-12*x*Math.sin(3*Math.pow(x,2))*Math.cos(Math.cos(3*Math.pow(x,2)))) - ((4*x)/(Math.log(10)*(2*Math.pow(x,2) + 1))));
            prosliX = x;
            document.getElementById("ispis").innerHTML += 
                "<p>Iteracija: "+n+"</p>"
                +"<p>x: "+x+"</p>"
                +"<p>Vrijednost funkcije: "+funkcija+"</p>"
                +"<p>Vrijednost derivacije: "+derivacija+"</p><br>";
            x = x - funkcija / derivacija;
            razlika = Math.abs(x-prosliX);
            console.log(preciznost, razlika);
        }
        document.getElementById("ispis").innerHTML += 
        "<p>Iteracija: "+n+"<br>"
        +"<p>x: "+x+"<br>"
        +"<p>Vrijednost funkcije: "+funkcija+"<br>"
        +"<p>Vrijednost derivacije: "+derivacija+"<br>"
        document.getElementById("ispis").innerHTML += "<br><p>konacni reuzultat: "+x+"<br>"
    }
    else {
        document.getElementById("ispis").innerHTML = "Upisana pocetna vrijednost nije iz zadanog intervala."; 
    }
}