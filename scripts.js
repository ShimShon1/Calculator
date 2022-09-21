//variables
let crnOperator = ''
let num1 = ''
let num2 = '' 
let numCount = 0
let result = 0
let addTo = ''
let num3 = ''

//selectors vars
let calcNums = document.querySelector(".calc-nums")
let numberBtns = Array.from(document.querySelectorAll(".number"))
let currentNumbers = document.querySelector(".crn-num")
let operators = Array.from(document.querySelectorAll(".operator"))
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let currentResult = 0;
let dot = document.querySelector(".dot")
let body = document.querySelector("body")
let main = document.querySelector("main")
let modeImput = document.querySelector(".mode-inp")
let img = document.querySelector("img")

//num event
for (let num = 0; num < numberBtns.length; num++) {
    numberBtns[num].addEventListener("click",
        function(){
            if (numberBtns[num].textContent == "."){
                if (addTo.includes(".")){
                    return false
                }
            }
           calcNums.textContent += numberBtns[num].textContent
            addTo += numberBtns[num].textContent
            currentNumbers.textContent = addTo
            
            
        }
        )
        
}

//operators event
for (let i = 0; i < operators.length; i++) {
    
    operators[i].addEventListener("click", function(){
        if (numCount == 0){
            num1 = addTo
            crnOperator =  operators[i].textContent
            calcNums.textContent += " " + operators[i].textContent + " "
            numCount++
            addTo = ''
            
            

        }else if (numCount == 1){
            calcNums.textContent += " " + operators[i].textContent + " "
            num2 = addTo
            currentResult = operate(Number(num1),Number(num2),crnOperator)
            currentNumbers.textContent = currentResult
            crnOperator =  operators[i].textContent
            addTo = ''
            
            numCount++
            
        }else if (numCount >= 2){
           
            calcNums.textContent += " " + operators[i].textContent + " "
            num3 = addTo
            currentResult = operate(Number(result),Number(num3),crnOperator)
            currentNumbers.textContent = currentResult
            crnOperator =  operators[i].textContent
            addTo = ''
            
            
        }
      
       
        
    })
    
}
equal.addEventListener("click", ()=>{
    if (numCount < 2){
        num2 = addTo
        currentResult = operate(Number(num1),Number(num2),crnOperator)
        currentNumbers.textContent = currentResult
        numCount++
        crnOperator =  ''
        
    }else if (numCount >= 2){
        num3 = addTo
        currentResult = operate(Number(result),Number(num3),crnOperator)
        currentNumbers.textContent = Math.floor(currentResult)
        crnOperator =  ''
        
    }

})

clear.addEventListener("click", ()=>{
    currentNumbers.textContent = '', calcNums.textContent= '',addTo = ''
    crnOperator = '', num1 = '',num2 = '',numCount = 0, result = 0, num3 = ''
    
})

//operate
function operate(a,b,oper){
    if(oper == "+"){
        result = a + b
        return result

    }else if(oper == "-"){
        
        result = a - b
        return result
        
    }else if(oper == "*"){
        result = a * b
        return result

    }else if(oper == "/"){
        
        result = a / b
        return result
    }else if(oper == "%"){
        
        result = a % b
        return result
    }

}

//operations 
// function add(a,b){
//     return a + b
// }

// function substract(a,b){
//     return a - b
// }

// function multiply(a,b){
//     return a * b
// }

// function divide(a,b){
//     return a / b
// }



//dark mode 
let darkmode = "off"



modeImput.addEventListener("change",function(){
    if (darkmode != "on"){

        for (let i = 0; i < numberBtns.length; i++) {
            numberBtns[i].classList.add("dark-num")
            
        }
    
        body.classList.add("dark-body")
        main.classList.add("dark-main")
        equal.style.backgroundColor = "rgb(20, 20, 50)"
        dot.style.backgroundColor = "rgb(20, 20, 50)"
        img.style.backgroundColor = "rgb(133, 140, 172)"
        clear.style.backgroundColor = "rgb(50, 20, 30)"
        
        for (let i = 0; i < operators.length; i++) {
            operators[i].classList.add("dark-op")
            
        }
    
        darkmode = "on"
    
    }else if (darkmode == "on"){
        for (let i = 0; i < numberBtns.length; i++) {
            numberBtns[i].classList.remove("dark-num")
            
        }
        body.classList.remove("dark-body")
        main.classList.remove("dark-main")
        equal.style.backgroundColor = "rgb(233, 227, 227)"
        dot.style.backgroundColor = "rgb(191, 210, 211)"
        img.style.backgroundColor = "white"
        clear.style.backgroundColor = "rgb(255, 210, 211)"
        
        for (let i = 0; i < operators.length; i++) {
            operators[i].classList.remove("dark-op")
            
        }

        darkmode = "off"
        
    }
})