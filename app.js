
function addCost(upgrade,price){
    
    const memoryCostElement = document.getElementById(upgrade+'-cost');
    memoryCostElement.innerText = price;
    // const balance = totalCost(upgrade);
    // const totalCostElement = document.getElementById('total-cost');
    // totalCostElement.innerText = balance;
}

// let sum=0;


function totalCost(idField){
    // const totalCostElement = document.getElementById('total-cost');
    // const totalCostText = totalCostElement.innerText;
    // const totalCostValue = parseFloat(totalCostText);
    // const totalBalance = totalCostValue+cost;
    // totalCostElement.innerText = totalBalance;
    const currentField = document.getElementById(idField+'-cost');
    const currentFieldText = currentField.innerText;
    // console.log(currentFieldText);
    const currentFieldValue = parseFloat(currentFieldText);
    console.log(currentFieldValue);
    const totalCostElement = document.getElementById('base-price');
    // console.log(totalCostElement);
    const totalCostText = totalCostElement.innerText;
    const totalCostValue = parseFloat(totalCostText);
    console.log(totalCostValue);
    
    const totalBalance= totalCostValue+currentFieldValue;

    // const balanceUpdate = document.getElementById('total-cost');
    // balanceUpdate.innerText = totalBalance;
    return totalBalance;
    
}

document.getElementById('8GB-memory').addEventListener('click',function(){
    // console.log('clicked');
    addCost('memory',0);
    const balance=totalCost('memory');
    console.log(balance)
})

document.getElementById('16GB-memory').addEventListener('click',function(e){
    // console.log('clicked');
    addCost('memory',160);
    const balance= totalCost('memory');
    console.log(balance)
})
document.getElementById('256GB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',0);
   const balance= totalCost('storage');
   console.log(balance)
})
document.getElementById('512GB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',1000);
    const balance = totalCost('storage');
    console.log(balance)
    
})
document.getElementById('1TB-storage').addEventListener('click',function(){
    // console.log('clicked');
    addCost('storage',5000);
    const balance =totalCost('storage');
    console.log(balance)
    
})
document.getElementById('delivery-free').addEventListener('click',function(){
    // console.log('clicked');
    addCost('delivery',0);
   const balance= totalCost('delivery');
   console.log(balance)
    
})
document.getElementById('delivery-charged').addEventListener('click',function(){
    // console.log('clicked');
    addCost('delivery',20);
    const balance= totalCost('delivery');

    console.log(balance)
})

 const balanceUpdate = document.getElementById('total-cost');
  balanceUpdate.innerText = balance;