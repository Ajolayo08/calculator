const bill = document.querySelector('#calculation')
const number = document.querySelector('#number')
const error = document.querySelector('.error')
const totalTip = document.querySelector('.totalTipPerPerson')
const total = document.querySelector('.totalPerPerson')
const reset = document.querySelector('.reset')


function calculateTip(percent){
    if(!bill.value || !number.value){
        error.style.display = 'block'
        error.textContent = 'Please fill in all gaps'
        setTimeout(()=>{
            error.style.display = 'none'
        },5000)
    } else{
        const billNumber = Number(bill.value)
        const numberNumber = Number(number.value)
        
        const billPerPerson = billNumber/numberNumber
        const tipValuePerPerson = ((percent/100)*billNumber)/numberNumber
        const totalAmountPerPerson = billPerPerson + tipValuePerPerson
        totalTip.textContent = tipValuePerPerson
        total.textContent = totalAmountPerPerson
        
        console.log(totalAmountPerPerson);
    } 
}

reset.addEventListener('click', ()=>{
    bill.value = ''
    number.value = ''
    totalTip.textContent = '0.00'
    total.textContent = '0.00'
})
