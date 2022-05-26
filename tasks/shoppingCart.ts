{
  class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number
    ) {}
  }

  class Delivery {
    constructor(public date: Date) {}
  }

  class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
      super(date);
    }
  }

  class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
      super(new Date());
    }
  }

  type TDeliveryOptions = HomeDelivery | ShopDelivery;
  type TCheckOutResult = { success: boolean };

  class Cart {
    private products: Product[] = [];
    private delivery: TDeliveryOptions;

    public addProduct(product: Product): void {
      this.products.push(product);
    }

    public deleteProduct(productId: number): void {
      this.products = this.products.filter(
        ({ id }: Product) => id !== productId
      );
    }

    public getSum(): number {
      return this.products
        .map(({ price }: Product) => price)
        .reduce((p1: number, p2: number) => p1 + p2);
    }

    public setDelivery(delivery: TDeliveryOptions): void {
      this.delivery = delivery;
    }

    public checkOut(): TCheckOutResult {
      if (this.products.length === 0) {
        throw new Error("Product list is empty");
      }

      if (!this.delivery) {
        throw new Error("Delivery method not specified ");
      }

      return { success: true };
    }
  }

  const cart = new Cart();

  cart.addProduct(new Product(1, "Cookies", 10));
  cart.addProduct(new Product(2, "Cake", 30));
  cart.addProduct(new Product(3, "Chocolate", 20));

  cart.deleteProduct(1);

  cart.setDelivery(new HomeDelivery(new Date(), "My address"));
}
