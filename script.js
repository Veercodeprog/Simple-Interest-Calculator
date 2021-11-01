var slider = document.getElementById("rate");

 document.getElementById("rate-output").innerHTML= slider.value;
 slider.oninput = function() {
    out.innerHTML = this.value;
  }



function sioutput()
{

 var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");

    var simpleInt = parseFloat(principal.value) *(1 + parseFloat(rate.value) * parseInt(years.value) /100);
    simpleInt = simpleInt.toFixed(2);
    if(principal.value <<= 0 || principal.value.length ==0 ){
      alert("please enter a positive value of Principal");
    }
   
   
    Years = 2021+parseInt(years.value);
    document.getElementById("siOutput-01").innerHTML = "If you deposit today Rs."+"<mark>"+principal.value+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+rate.value+"%."+"</mark>"+"<br>"+"You will receive an amount of Rs."+"<mark>"+simpleInt+"</mark>"+","+"<br>"+"in the year "+"<mark>"+Years+"</mark>"+"."

}
   
