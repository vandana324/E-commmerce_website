import { getCardProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) => {
    // Fetch the current cart products from localStorage or initialize an empty array
    let arrLocalStorageProduct = getCardProductFromLS();

    // Log the current cart before adding (for debugging)
    console.log("Cart before adding:", arrLocalStorageProduct);

    // Get the current product's DOM element
    const currentProductElem = document.querySelector(`#card${id}`);
    if (!currentProductElem) {
        console.error(`Product element with id card${id} not found.`);
        return;
    }

    // Extract quantity and price from the DOM
    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;

    // Clean and calculate price
    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    console.log(existingProd);


    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price  = Number(price*quantity);
        let updateCart = {id,quantity,price};

        updateCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updateCart : curProd;
        });
        localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    }

    if(existingProd){
        return false;
    }
    price = Number(price) * Number(quantity);
    quantity = Number(quantity);

    // Check if the product already exists in the cart
    const existingProductIndex = arrLocalStorageProduct.findIndex(
        (product) => product.id === id
    );

    if (existingProductIndex !== -1) {
        // If the product exists, update its quantity and price
        arrLocalStorageProduct[existingProductIndex].quantity += quantity;
        arrLocalStorageProduct[existingProductIndex].price += price;
    } else {
        // If the product does not exist, add it as a new entry
        arrLocalStorageProduct.push({ id, quantity, price });
    }

    // Update localStorage
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

   updateCartValue(arrLocalStorageProduct);
};
