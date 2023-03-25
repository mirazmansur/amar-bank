/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. previous withdraw amount by using getTextElemtnValueById funtion
4. calculate new withdraw Total and set the value
4.5: set new withdraw total by using set
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
*/



document.getElementById('btn-withdraw').addEventListener('click', function(){
   const newWithdrawAmount = document.getInputFieldTValueById('withdraw-field');
   console.log(newWithdrawAmount);
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
})