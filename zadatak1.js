function zadatak1() {
    let x = document.getElementById("x0").value;
    if(x >= 2 && x <= 3) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = x;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            funkcija = 3*Math.pow(x,4) - 3*Math.pow(x,3) - 6*Math.pow(x,2) -5*x + 7;
            derivacija = 3*4*Math.pow(x,3) - 3*3*Math.pow(x,2) - 6*2*x - 5;
            prosliX = x;
            document.getElementById("ispis").innerHTML += 
                "<p>Iteracija: "+n+"</p>"
                +"<p>x: "+x+"</p>"
                +"<p>Vrijednost funkcije: "+funkcija+"</p>"
                +"<p>Vrijednost derivacije: "+derivacija+"</p><br>";
            x = x - funkcija / derivacija;
            razlika = Math.abs(x-prosliX);
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