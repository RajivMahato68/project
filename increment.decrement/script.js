const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')



plusBtn.addEventListener('click',() =>{
const countVlaue = parseInt(count.innerText)
const changeByValue = parseInt(changeBy.value)
count.innerText = countVlaue + changeByValue
   
})
minusBtn.addEventListener('click',() =>{
    const countVlaue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
count.innerText = countVlaue - changeByValue
})

resetBtn.addEventListener('click', () =>{
    count.innerText = 0
})
