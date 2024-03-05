function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n != 0;
}

function handleInputNumberChange(event){

    if(!isNumber(event.target.value)){
        event.target.classList.add( "input-error" );
    }
    else{
        event.target.classList.remove( "input-error" );
    }
}

const inputNumber1 = document.querySelector('[name = "number1"]');
inputNumber1.addEventListener('change',handleInputNumberChange);

const inputNumber2 = document.querySelector('[name = "number2"]');
inputNumber1.addEventListener('change',handleInputNumberChange);

const btnPlus = document.querySelector("#btn-btnPlus");
btnPlus.addEventListener('click', handleBtnPlusClick);

function handleBtnPlusClick(){

    const validateNumber1 = isNumber(inputNumber1.value);
    const validateNumber2 = isNumber(inputNumber2.value);

            if(validateNumber1 && validateNumber2) {

              const result1 = document.querySelector('[id = "result-box"]');
              result1.innerHTML = (Number(inputNumber1.value) +
              Number(inputNumber2.value));

            }
            else if(validateNumber1 == false && validateNumber2 == false) {

                inputNumber1.classList.add("input-error");
                inputNumber2.classList.add("input-error");

            }
            else if(validateNumbeer1 == true && validateNumber2 ==false) {

                inputNumber2.classList.add("input-error");

            }
            else {

                inputNumber1.classList.add("input-error");

            }
               
}

const btnTimes = document.querySelector("#btn-times");
btnTimes.addEventListener('click', handleBtnTimesClick);

function handleBtnTimesClick(){

    const validateNumber1 = isNumber(inputNumber1.value);
    const validateNumber2 = isNumber(inputNumber2.value);

            if(validateNumber1 && validateNumber2) {

              const result1 = document.querySelector('[id = "result-box"]');
              result1.innerHTML = (Number(inputNumber1.value) +
              Number(inputNumber2.value));

            }
            else if(validateNumber1 == false && validateNumber2 == false) {

                inputNumber1.classList.add("input-error");
                inputNumber2.classList.add("input-error");

            }
            else if(validateNumbeer1 == true && validateNumber2 == false) {

                inputNumber2.classList.add("input-error");

            }
            else {

                inputNumber1.classList.add("input-error");

            }

}







     
    
