let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
let screenValue = ''
let validValues = '1234567890/*%().'
console.log(buttons)
for (button of buttons){
    button.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        if(validValues.includes(buttonText) === false){
            console.log("Not in list")
            screenValue = ''
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue)
            screenValue = '';
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
            
        }
    })
}
