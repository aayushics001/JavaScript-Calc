console.log("This is a calculator")

let screen = document.getElementById('screen')
let screenValue = ''
let buttons = document.querySelectorAll('button')
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText
        console.log('ButtonText is ', buttonText)
        if (buttonText == '='){
            screen.value = eval(screenValue)
        }
        else if (buttonText == 'C'){
            screenValue = ''
            screen.value = screenValue
        }
        else{
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}