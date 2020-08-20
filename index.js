let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('button')
let screenValue = ''
let validValues = '1234567890/*%().+=-CE'
for (button of buttons){
    button.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        console.log(buttonText);
        if(validValues.includes(buttonText) === false){
            console.log("Not in list")
            screenValue = ''
            screen.value = screenValue;
        }
        else if(buttonText == 'CE'){
            if(screenValue.length != 0){
                screenValue = screenValue.slice(0,screenValue.length-1)
                screen.value = screenValue;
            }
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue)
            screenValue = ''
            
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