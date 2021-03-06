import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value,
      des = document.getElementById("des").value;

    // Create a new Oject Product
    const product = new Product(name, price, year, des);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "" || des === "" ) {
      ui.showMessage("Rellena Todos los campos Pana", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Producto Agregado", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
