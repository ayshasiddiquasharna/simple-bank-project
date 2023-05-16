//console.log('deposite.js')

document.getElementById('btn-deposite').addEventListener('click', function () {
    console.log('clicked deposite button');


    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    //console.log(depositeAmount);


    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    //console.log(depositeTotal);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



    depositeField.value = '';
})