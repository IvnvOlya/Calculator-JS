const out = document.querySelector('.out-screen p');

out.textContent = 0;
let num1 = '';
let num2 = '';
let sign = '';
let result = false;

const arrNumbers = ['0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const arrSigns = ['+', '-', '/', 'х'];

const plusMinus = document.querySelector('.plus-minus');
const percent = document.querySelector('.percent');
const dot = document.querySelector('.dot');

function clearOut(){
    num1 = '';
    num2 = '';
    sign = '';
    result = false; 
    out.innerHTML = 0;
}

document.querySelector('.ac').onclick = clearOut;

document.querySelector('.buttons').onclick= (event) => {
    //если нажали не на кнопку
    if(!event.target.classList.contains('btn'))
return;
    //если нажали на ас
    if(event.target.classList.contains('ac')) return;

    // значение
    let item = event.target.textContent;
    
    //проверяем если ли такое значение в массиве
    if(arrNumbers.includes(item)){
        if(num1.length<8 && num2.length<8){
            if( num2 === '' && sign === ''){
                num1 += item
                console.log(num1, num2, sign)
                out.textContent = num1;
                }
                else if( num1 !== '' && num2!=='' && result){
                    num2 = item;
                    result = false;
                    out.textContent = num2;
                }
                else {
                    num2 +=item;
                    out.textContent = num2;
                } return;
        }else {
            out.textContent = 'Error';

        }
}

    if(arrSigns.includes(item)){
        sign = item
        console.log(num1, num2, sign)
        out.textContent = sign;
    }

    if(item === '='){
        switch(sign){
            case '+':
                num1 = (+num1) + (+num2);
                break;
            case '-':
                num1 = num1 - num2;
                break;
            case '*':
                num1 = num1 * num2;
                break;
            case '/':
                if(num2 === '0'){
                    out.textContent = 'Ошибка';
                    num1 ='';
                    num2 = '';
                    sign = '';
                    return;
                }
                num1 = num1 / num2;
                break;
        }
        result = true;
        out.textContent = num1;
        console.log(num1, num2, sign)
    }

    //если нажади -/+
    if(item === plusMinus.textContent){
        if(num1 !== 0 && num2 ===''){
            num1 = num1 * (-1)
            out.textContent = num1
        }else{
            num2 = num2 * (-1)
            out.textContent = num2
        }
    }
    //если нажали %
    if(item === percent.textContent){
        if(num1 !== 0 && num2 ===''){
            num1 = num1 / (100)
            out.textContent = num1
        }else{
            num2 = num2 / (100)
            out.textContent = num2
        }
    }

}