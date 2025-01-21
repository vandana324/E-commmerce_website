import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';



document.addEventListener("DOMContentLoaded", () => {
    showProductContainer(products);
  });

