const history = [];

// card-1

document.getElementById('donate-btn-noakhali').addEventListener('click',function(){

    
    
    const noakhaliAmountInput = getInputFieldById('input-noakhali') ;
    const inputValue = parseFloat(noakhaliAmountInput);

    const noakhaliBalanceElement = document.getElementById('noakhali-balance').innerText;
    const mainBalance = parseFloat(noakhaliBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 || inputValue > myBalance){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('noakhali-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;
    }

    document.getElementById('success_modal').showModal();

    const noakhali ={
        title:`${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh`,
        date: new Date()
    }

    history.push(noakhali);

})



// card-2

document.getElementById('donate-btn-feni').addEventListener('click',function(){
    
    const feniAmountInput = getInputFieldById('input-feni') ;
    const inputValue = parseFloat(feniAmountInput);

    const feniBalanceElement = document.getElementById('feni-balance').innerText;
    const mainBalance = parseFloat(feniBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 || inputValue > myBalance){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('feni-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;


    }

    document.getElementById('success_modal').showModal();

    const feni ={
        title:`${inputValue} Taka is Donated for Flood Relief in Feni,Bangladesh`,
        date: new Date()
    }

    history.push(feni);
})



// card-3

document.getElementById('donate-btn-qouta').addEventListener('click',function(){
    
    const qoutaAmountInput = getInputFieldById('input-qouta') ;
    const inputValue = parseFloat(qoutaAmountInput);

    const qoutaBalanceElement = document.getElementById('qouta-balance').innerText;
    const mainBalance = parseFloat(qoutaBalanceElement);
    const totalAmount = mainBalance + inputValue;

    const myBalance = parseFloat(document.getElementById("myBalance").innerText);
    const myAfterBalance = myBalance - inputValue;
    if(isNaN (inputValue)  || inputValue <= 0 || inputValue > myBalance){
        alert('Enter a valid number')
        return;
    }
    else{
        document.getElementById('qouta-balance').innerText = totalAmount;
        document.getElementById('myBalance').innerText = myAfterBalance;


    }

    document.getElementById('success_modal').showModal();

    const qouta ={
        title:`${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`,
        date: new Date()
    }

    history.push(qouta);
})

// history button
document.getElementById('history').addEventListener('click',function(){

    document.getElementById('history').classList.add('bg-[#B4F461]');
           
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

    document.getElementById('footer').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');


    historyShow();
})


// donation button
document.getElementById('btn-donation').addEventListener('click',function(){
    document.getElementById('history').classList.remove('bg-[#B4F461]');
           
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById('footer').classList.remove('hidden');
})


function historyShow(){
    for(let j = 0; j < history.length; j++){
        const div = document.createElement('div');
        div.innerHTML = `
          <div class="my-4 p-8 border-[1px] border-gray-200 rounded-lg w-[100%] ">
                <p class="mb-4 font-bold text-black text-[20px]">${history[j].title}</p>
                <p class="font-light text-[#585858] ">${history[j].date}</p>
          </div>
        `;
        document.getElementById('history-container').appendChild(div);
    }
}


document.getElementById('blog-btn').addEventListener('click',function(){

    window.location.href ='/Assignment-5/blog.html';
})

