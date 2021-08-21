
function addCost(upgrade,price){
    
    const memoryCostElement = document.getElementById(upgrade+'-cost');
    memoryCostElement.innerText = price;
    console.log(memoryCostElement.innerText);
    const memoryCostValue = parseFloat(memoryCostElement.innerText);
    totalCost(memoryCostValue);
    
}




function totalCost(total){
    const balanceUpdate = document.getElementById('base-price');
    const balanceText = balanceUpdate.innerText;
    const balanceValue = parseFloat(balanceText);
    const totalBalance = balanceValue+total;
    const balanceUpdate2 = document.getElementById('total-cost');
    balanceUpdate2.innerText = totalBalance;
    return totalBalance; 
}



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