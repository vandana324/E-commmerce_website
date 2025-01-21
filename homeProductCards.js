import { addToCart } from './addToCart';
import { homeQualityToggle } from './homeQualityToggle';

const productsContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplete");




export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach((curProd) => {
        const { brand,category,description,id,image,name,price,stock} = 
        curProd;

        const productClone = document.importNode(productTemplate.content ,true);

        const cardElement = productClone.querySelector("#cardValue");
        if (cardElement) {
          cardElement.setAttribute("id", `card${id}`);
        }


        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
        
        
        const stockElement = productClone.querySelector(".stockElement");
    if (stockElement) {
      stockElement.addEventListener("click", (event) => {
        homeQualityToggle(event, id, stock);
      });
    }

    productClone.querySelector(".add-to-cart-button").addEventListener("click",(event) =>{
        addToCart(event, id , stock);
    })
        
        productsContainer.append(productClone)
    });
};