/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product 
   * @param {Object} product A new product Object
   */
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    var operacion = ((product.des * product.price) / 100)
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                  <center><div><h3 style="color: red ">${product.name}</h3></div></center>
                    <strong>Precio Con Descuento</strong>: <h4>$${ product.price - operacion }</h4>
                    <strong>Descuento</strong>:¡ ${product.des}% !
                    <br>
                    <div><strong>Año Del Producto</strong>: ${product.year}</div><br>
                    <strong>Precio Original</strong>: <h3>$${product.price}</h3>
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Producto Eliminado", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
