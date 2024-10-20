// SUMATION

let first  = document.getElementById('first')
let second = document.getElementById('second')
let button = document.getElementById('btn')
let pera   = document.getElementById('pera')
let value  = ""

button.addEventListener('click',()=> {
    let sum = first.value + second.value;
    value = value+sum
    pera.innerHTML = value
    console.log(pera)
})

// SUBTRACTION

let minus_first = document.getElementById('mfirst')
let minus_second = document.getElementById('msecond')
let button2 = document.getElementById('btn2')
let mpera = document.getElementById('mpera')
let values =""

button2.addEventListener('click', ( ) =>{
    let sub = minus_first.value - minus_second.value;
    values = values +sub;
    mpera.innerHTML = values;
    console.log(mpera)
})

// Multiply

let m_first = document.getElementById('gfirst')
let m_second = document.getElementById('gsecond')
let m_pera = document.getElementById('gpera')
let button3 = document.getElementById('btn3')

let main = ""

button3.addEventListener('click',() =>{
    let mul = m_first.value * m_second.value
    main = main+ mul;
    m_pera.innerHTML =main
    console.log(m_pera)
})
   
    