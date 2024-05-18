document.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        zadatak1();
      }
});
function zadatak3() {
    document.getElementById("ispis").innerHTML = "";
    let x = document.getElementById("x0").value;
    if(x >= -1 && x <= 0) {
        let funkcija;
        let derivacija;
        let prosliX;
        let n = 0;
        let razlika = 100;
        let preciznost = Math.pow(10,document.getElementById("preciznost").value);
        for(razlika; razlika > preciznost; n++) {
            //(x-2x^2+x^3 + 1)/(=x^2 + 2x -1) = 0, x=[-1,0]
            funkcija = ((x - 2*Math.pow(x,2) + Math.pow(x,3) + 1)/(Math.pow(x,2) + 2*x - 1));
            derivacija = (((1 - 2*2*x + 3*Math.pow(x,2))*(Math.pow(x,2) + 2*x - 1) - (x - 2*Math.pow(x,2) + Math.pow(x,3) + 1)*(2*x + 2))/Math.pow((Math.pow(x,2) + 2*x - 1),2));
            console.log(x, funkcija, derivacija);
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