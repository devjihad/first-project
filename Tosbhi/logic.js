let display = document.getElementById('display')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let value = 0
plus.addEventListener('click',()=>{
    value += 1
    display.innerText= value
})

minus.addEventListener('click',( )=> {
    if(value<=0){
        alert('You are under value')
    }
    else{
        value-= 1
    display.innerText = value
    }
    
})