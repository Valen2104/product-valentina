/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name The Product Name
   * @param {number} price The Product Price
   * @param {number} year The year creation of the Product
   */
  constructor(name, price, year, des) {
    this.name = name;
    this.price = price;
    this.year = year,
    this.des = des;
  }
}
