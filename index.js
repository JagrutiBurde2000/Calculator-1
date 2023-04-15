
function performOperation(){
    const num1=document.getElementById("num1").value
    const num2=document.getElementById("num2").value
    const operator=document.getElementById("operator").value
    const Result=document.getElementById("result")

    if(isNaN(num1)|| isNaN(num2)){
        Result.innerText="please enter a  valid number"
    }
    if(operator===""){
        Result.innerText="please enter a  valid operator"
    }

    const Result1=calculate(parseFloat(num1),parseFloat(num2),operator);
    Result.innerText="Result is :"+Result1;
}

function calculate(num1, num2, operator){
    if(operator=="+"){
        return num1+num2;
    }
   else if(operator=="-"){
        return num1-num2;
    }
   else if(operator=="*"){
        return num1*num2;
    }
  else  if(operator=="/"){
        return num1/num2;
    }else{
        return null
    }
}