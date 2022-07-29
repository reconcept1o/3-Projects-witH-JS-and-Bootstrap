
// ....convert to temperature....

document.getElementById("submitButton").onclick = function() {

let temp;

if(document.getElementById("cButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
}
else if(document.getElementById("fButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
}
else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
}

}

function toCelsius(temp){
    return(temp-32) * (5/9);


}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}


// ....Exchange js...........................
// ............................................

let button = document.getElementById('btn');

button.addEventListener('click', function(){
    const lira = parseInt(document.getElementById('liras').value);
    const pick = document.getElementById('pick').value;

    if(lira === '' || isNaN(lira)){
        document.getElementById('liras').focus();
        document.getElementById('error').innerHTML = 'Please provide a valid lira';
        document.getElementById('output').innerHTML = '';
    }else{
        document.getElementById('error').innerHTML = '';
        switch(pick){
         
            case 'Dollar':
                convert_dollars(lira);
                break;
            case 'Euro':
                convert_euros(lira);
                break;
            case 'Sterlin':
                convert_sterlins(lira);
                break;
            default:
                alert('Error');
        }


        function convert_dollars(lira){
            let rate =0.056 , dollars;
            dollars = lira * rate;
            document.getElementById('output').innerHTML = lira + " lira = " + dollars.toFixed(3) + ' $ ';
        }
        function convert_euros(lira){
            let rate =0.055 , euros;
            euros = lira * rate;
            document.getElementById('output').innerHTML = lira + " lira = " + euros.toFixed(3) + ' € ';
        }
        function convert_sterlins(lira){
            let rate =0.046  , sterlins;
            sterlins = lira * rate;
            document.getElementById('output').innerHTML = lira + " lira = " + sterlins.toFixed(3) + ' £ ';
        }
    }
});

// ...............ideal weight js......

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }
    
    
});