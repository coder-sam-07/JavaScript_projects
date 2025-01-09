const from = document.querySelector("form");

from.addEventListener("submit",function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results"); 
    
    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a vaild number";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "please enter a vaild number";
    }
    else 
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // results.innerHTML = `<span> ${bmi}</span>`;
    }
    
    if(bmi<18.6)
    {
        results.innerHTML = `<span>UnderWeight: ${bmi}</span>`

    }
    else if(bmi>18.6 && bmi<24.9)
    {
        results.innerHTML = `<span>NormalWeight: ${bmi}</span>`
    }
    else
    {
        results.innerHTML = `<span>OverWeight: ${bmi}</span>`
    }


})