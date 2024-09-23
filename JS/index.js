// card-1

document.getElementById('donate-btn-noakhali').addEventListener('click',function(){
    
    const noakhaliAmountInput = document.getElementById('input-noakhali').value ;
    const inputValue = parseFloat(noakhaliAmountInput);

    const noakhaliBalanceElement = document.getElementById('noakhali-balance').innerText;
    const mainBalance = parseFloat(noakhaliBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 ){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('noakhali-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;


    }
})



// card-2

document.getElementById('donate-btn-feni').addEventListener('click',function(){
    
    const feniAmountInput = document.getElementById('input-feni').value ;
    const inputValue = parseFloat(feniAmountInput);

    const feniBalanceElement = document.getElementById('feni-balance').innerText;
    const mainBalance = parseFloat(feniBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 ){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('feni-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;


    }
})



// card-3

document.getElementById('donate-btn-qouta').addEventListener('click',function(){
    
    const qoutaAmountInput = document.getElementById('input-qouta').value ;
    const inputValue = parseFloat(qoutaAmountInput);

    const qoutaBalanceElement = document.getElementById('qouta-balance').innerText;
    const mainBalance = parseFloat(qoutaBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 ){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('qouta-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;


    }
})

document.getElementById('btn-donation').addEventListener('click',function(){
    
})