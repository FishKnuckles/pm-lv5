function zadatak6() {
    let x = document.getElementById("x0").value;
    if(x >= 1 && x <= 2) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = 100;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            //e^(-x^3) -2cosx = 0
            funkcija = (Math.pow(Math.E,Math.pow(-x,3)) - 2*Math.cos(x));
            derivacija = (Math.pow(Math.E,Math.pow(-x,3)) + 2*Math.sin(x));
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
    }
    else {
        document.getElementById("ispis").innerHTML = "Upisana pocetna vrijednost nije iz zadanog intervala."; 
    }
}