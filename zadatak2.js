function zadatak2() {
    let x = document.getElementById("x0").value;
    if(x >= -2 && x <= 1) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = 100;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            //(4x^4-2x^2 + 1)(2x -3x^3 -1) = 0, x=[-2,-1]
            funkcija = ((4*Math.pow(x,4) - 2*Math.pow(x,2) + 1)*(2*x - Math.pow(x,3) - 1));
            derivacija =(4*4*Math.pow(x,3) - 2*2*x + 1)*(2*x - Math.pow(x,3) - 1) + (4*Math.pow(x,4) - 2*Math.pow(x,2) + 1)*(2 - 3*Math.pow(x,2));
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