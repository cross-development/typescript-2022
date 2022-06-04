{
  class Vehicle {
    run: number;
  }

  class LCV extends Vehicle {
    capacity: number;
  }

  function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;

    return vehicle;
  }

  const vehicle = kmToMiles(new Vehicle());
  const lcv = kmToMiles(new LCV());

  interface IVehicle {
    run: number;
  }

  function kmToMiles2<T extends IVehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;

    return vehicle;
  }

  kmToMiles({ run: 1 }); // OK

  function logId<T extends string | number, Y>(
    id: T,
    additionalData: Y
  ): { id: T; data: Y } {
    console.log("id", id);
    console.log("additionalData", additionalData);

    return { id, data: additionalData };
  }
}
