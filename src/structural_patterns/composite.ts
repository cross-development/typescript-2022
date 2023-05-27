{
  abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    addItem(item: DeliveryItem) {
      this.items.push(item);
    }

    getItemPrices(): number {
      return this.items.reduce((acc, item) => (acc += item.getPrice()), 0);
    }

    abstract getPrice(): number;
  }

  class DeliveryShop extends DeliveryItem {
    constructor(private deliveryFee: number) {
      super();
    }

    getPrice(): number {
      return this.getItemPrices() + this.deliveryFee;
    }
  }

  class Package extends DeliveryItem {
    getPrice(): number {
      return this.getItemPrices();
    }
  }

  class Product extends DeliveryItem {
    constructor(private price: number) {
      super();
    }

    getPrice(): number {
      return this.price;
    }
  }

  const shop = new DeliveryShop(100);
  // Add product to the shop cart
  shop.addItem(new Product(1000));

  // Create some package #1
  const pack1 = new Package();
  // Add product to the package
  pack1.addItem(new Product(2000));
  // Add product to the package
  pack1.addItem(new Product(300));
  // Add package #2 to the shop cart
  shop.addItem(pack1);

  // Create some package #2
  const pack2 = new Package();
  // Add product to the package
  pack2.addItem(new Product(500));
  // Add package #2 to the shop cart
  shop.addItem(pack2);

  console.log(shop.getPrice());
}
