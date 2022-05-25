{
  class Vehicle {
    public make: string; // allowed anywhere
    private damages: string[]; // allowed only inside super class
    private _model: string; // allowed anywhere
    protected run: number; // allowed by extends

    #price: number; // allowed only inside super class (js & ts)

    set model(model: string) {
      this.model = model;
    }

    get model() {
      return this._model;
    }

    isPriceEqual(v: Vehicle) {
      return this.#price === v.#price;
    }

    addDamage(damage: string) {
      this.damages.push(damage);
    }
  }

  new Vehicle().make; // OK
  // new Vehicle().damages; // Not allowed
  new Vehicle().model; // OK
  // new Vehicle().run; // Not allowed

  class EuroTruck extends Vehicle {
    setDamage() {
      // this.damages; // Not allowed
      this.make; // OK
      this.model; // OK
    }

    setRun(km: number) {
      this.run = km / 0.62; // OK
    }
  }
}
