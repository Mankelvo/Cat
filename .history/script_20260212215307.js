const cart = [
  { id: 1, name: "Shoes", price: 50, quantity: 2 },
  { id: 2, name: "Hat", price: 20, quantity: 1 },
  { id: 3, name: "Shirt", price: 30, quantity: 3 }
];

function getTotal(cart){
    const tax_rate = 0.08;
    const total=cart.reduce((total,product) =>{
       return  total+(product.price*product.quantity)
    },0)
const taxAmount = total *tax_rate;
const grandTotal = subtotal + taxAmount;
return getTotal;
console.log(`${total.toFixed(2)}`);
console.log(`$${taxAmount.toFixed(2)}`);
console.log(`$${grandTotal.toFixed(2)}`);
}
getTotal(cart)

function removeItem(id){
const filteredCat=cart.filter(item =>{
    return item.id!==id;
        
})
console.log(filteredCat)
}
removeItem(2