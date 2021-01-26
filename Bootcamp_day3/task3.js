class Cart {
  constructor(item_id, price, quantity) {
    this.item_id = item_id;
    this.price = price;
    this.quantity = quantity;
  }

  totalItems() {
    return this.item_id;
  }

  totalQuantity() {
    return this.quantity;
  }

  totalPrice() {
    return this.price;
  }

  showAll() {
    return (
      "id :" +
      this.item_id +
      " price :" +
      this.price +
      " quantity :" +
      this.quantity
    );
  }
}

const keranjang = new Cart(1, 30000, 3);
const keranjang = new Cart(1, 30000, 3);
console.log(keranjang.showAll());
