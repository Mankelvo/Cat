const cart = [
  { id: 1, name: "Shoes", price: 50, quantity: 2 },
  { id: 2, name: "Hat", price: 20, quantity: 1 },
  { id: 3, name: "Shirt", price: 30, quantity: 3 }
];

function getTotal(cart){
    const total=cart.reduce((total,product) =>{
       return  total+product.price
    },0)
console.log(total)
}
getTotal(cart)

function removeItem(cart, id){
cart.filter(item =>{
    if(item.id!===cart)
})
}