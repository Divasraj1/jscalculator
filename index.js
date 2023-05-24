let inputbox = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let results = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            results = eval(results);
            inputbox.value = results;
        }
        else if(e.target.innerHTML == 'AC'){
            results = "";
            inputbox.value = results;
        }
        else if(e.target.innerHTML == 'DEL'){
            results = results.substring(0,results.length - 1);
            inputbox.value = results;
        }
        else{
            results += e.target.innerHTML;
            inputbox.value = results;
        }
    })
})