// Global variables for using to add total of balance
let basePrice = 1299;
let extraMemorytCost = 0;
let extraStorageCost = 0;
let deliveryCharge = 0;

// Function to upgrade price based on the options selected
function addCost(upgrade,price){
    if (upgrade == 'memory')
    {
        extraMemorytCost = price;
    }
    else if (upgrade == 'storage'){
        extraStorageCost = price;
    }
    else{
        deliveryCharge = price;
    }
    const costElement = document.getElementById(upgrade+'-cost');
    costElement.innerText = price;
}
// Function to get total cost after all the purchase
function totalCost(){
    const totalBalance = basePrice+extraMemorytCost+extraStorageCost+deliveryCharge;
    return totalBalance;
}
// function to upgrade the total cost in the UI for both both total price section and total section with discount
function updateTotalCost(){
    document.getElementById('total-cost').innerText = totalBalance;
    document.getElementById('total').innerText = totalBalance;

}
// Event listener for 8GB memory button
document.getElementById('8GB-memory').addEventListener('click',function(){
    addCost('memory',0);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for 16GB memory button
document.getElementById('16GB-memory').addEventListener('click',function(e){
    addCost('memory',160);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for 256GB storage button
document.getElementById('256GB-storage').addEventListener('click',function(){
    addCost('storage',0);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for 512GB storage button
document.getElementById('512GB-storage').addEventListener('click',function(){
    addCost('storage',1000);
    totalBalance = totalCost();
    updateTotalCost();
    
})
// Event listener for 1TB storage button
document.getElementById('1TB-storage').addEventListener('click',function(){
    addCost('storage',5000);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for free delivery button
document.getElementById('delivery-free').addEventListener('click',function(){
    addCost('delivery',0);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for Prime delivery button
document.getElementById('delivery-charged').addEventListener('click',function(){
    addCost('delivery',20);
    totalBalance = totalCost();
    updateTotalCost();
})
// Event listener for coupon code button
document.getElementById('coupon-code').addEventListener('click',function(){
   const inputFieldValue = document.getElementById('input-field').value;
   const basePriceMac = document.getElementById('total-cost');
   const basePriceValue = parseFloat(basePriceMac.innerText);
//  it will calculate discount for base price macbook when proper coupon code gets used
   if(inputFieldValue == 'stevekaku' && basePriceValue==1299)
   {
       const discount = basePriceValue*0.2;
       const afterDiscountPrice = basePriceValue-discount;
       document.getElementById('total').innerText = afterDiscountPrice;
       document.getElementById('input-field').value = '';
   }
//  it will calculate discount for upgraded price macbook when proper coupon code gets used
   else if(inputFieldValue == 'stevekaku')
   {
    const discount = totalBalance*0.2;
    const afterDiscountPrice = totalBalance-discount;
    document.getElementById('total').innerText = afterDiscountPrice;
    document.getElementById('input-field').value = '';
   }
})