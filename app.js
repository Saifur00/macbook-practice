
function addCost(upgrade,price){
    
    const memoryCostElement = document.getElementById(upgrade+'-cost');
    memoryCostElement.innerText = price;
    // const balance = totalCost(upgrade);
    // const totalCostElement = document.getElementById('total-cost');
    // totalCostElement.innerText = balance;
    totalCost();
}

// let sum=0;


function totalCost(){
    // const totalCostElement = document.getElementById('total-cost');
    // const totalCostText = totalCostElement.innerText;
    // const totalCostValue = parseFloat(totalCostText);
    // const totalBalance = totalCostValue+cost;
    // totalCostElement.innerText = totalBalance;
    // const currentField = document.getElementById(idField+'-cost');
    // const currentFieldText = currentField.innerText;
    // // console.log(currentFieldText);
    // const currentFieldValue = parseFloat(currentFieldText);
    // console.log(currentFieldValue);
    // const totalCostElement = document.getElementById('base-price');
    // // console.log(totalCostElement);
    // const totalCostText = totalCostElement.innerText;
    // const totalCostValue = parseFloat(totalCostText);
    // console.log(totalCostValue);
    
    // const totalBalance= totalCostValue+currentFieldValue;

    const memoryPrice = document.getElementById('memory-cost')
    console.log(memoryPrice);
    const storagePrice = document.getElementById('storage-cost');
    console.log(storagePrice);
    const deliveryPrice = document.getElementById('delivery-cost');
    console.log(deliveryPrice);
    const memoryPriceRightNow = memoryPrice.innerText;
    console.log(memoryPriceRightNow);
    const storagePriceRightNow = storagePrice.innerText;
    console.log(storagePriceRightNow);
    const deliveryPriceRightNow = deliveryPrice.innerText;
    console.log(deliveryPriceRightNow);

    // console.log(deliveryPriceRightNow);
    const pr1 = parseFloat(memoryPriceRightNow);
    const pr2 = parseFloat(storagePriceRightNow);
    const pr3 = parseFloat(deliveryPriceRightNow);
    // console.log(pr1,pr2,pr3)

    const total = pr1+pr2+pr3;
    console.log(total);
    const balanceUpdate = document.getElementById('total-cost');
    const balanceText = balanceUpdate.innerText;
    const balanceValue = parseFloat(balanceText);
    balanceUpdate.innerText = balanceValue+total;
    // totalBalanceUpdate(total);
    // const balanceUpdate = document.getElementById('total-cost');
    // balanceUpdate.innerText = totalBalance;
    // return totalBalance;
    
}

// function totalBalanceUpdate(totalBalance){
//     const balanceUpdate = document.getElementById('total-cost');
//     const balanceText = balanceUpdate.innerText;
//     const balanceValue = parseFloat(balanceText);
//     balanceUpdate.innerText = balanceValue+totalBalance;
// }

document.getElementById('8GB-memory').addEventListener('click',function(){
    // console.log('clicked');
    addCost('memory',0);
    

})

document.getElementById('16GB-memory').addEventListener('click',function(e){
    // console.log('clicked');
    addCost('memory',160);
   
})
document.getElementById('256GB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',0);
})
document.getElementById('512GB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',1000);
    
})
document.getElementById('1TB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',5000);
  
    
})
document.getElementById('delivery-free').addEventListener('click',function(){
    // console.log('clicked');
    addCost('delivery',0);
  
})
document.getElementById('delivery-charged').addEventListener('click',function(){
    // console.log('clicked');
    addCost('delivery',20);
  

})

//  const balanceUpdate = document.getElementById('total-cost');
//   balanceUpdate.innerText = balance;