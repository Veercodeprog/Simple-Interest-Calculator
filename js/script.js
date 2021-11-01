var slider = document.getElementById("rate");
 var out = document.getElementById("rate-output");
 out.innerHTML= slider.value;
 slider.oninput = function() {
    out.innerHTML = this.value;
  }
  var select_value = document.querySelector('#years').value;


function sioutput()
{

 var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");

    var simpleInt = parseFloat(principal.value) *(1 + parseFloat(rate.value) * parseInt(years.value) /100);
    simpleInt = simpleInt.toFixed(2);
    
   
    Years = 2021+parseInt(years.value);
    document.getElementById("siOutput-01").innerHTML = "If you deposit today Rs."+"<mark>"+principal.value+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+rate.value+"%."+"</mark>"+"<br>"+"You will receive an amount of Rs."+"<mark>"+simpleInt+"</mark>"+","+"<br>"+"in the year "+"<mark>"+Years+"</mark>"+"."

}
      
