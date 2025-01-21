import products from "./api/products.json";
import {getCartProductFromLS} from "./getCartProducts";

let cartproducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
   return cartproducts.some((curElem) => curElem.id === curProd.id);
})

console.log(filterProducts);

// const cartElement = document.querySelector("#productCartContainer");
// const templatecontainer = document.querySelector("#productCardTemplate");

// const showCardtProduct = () => {
// filterProducts.forEach((curProd) =>{
//     const { category,id,image,stock,price} = curProd
// })
// }