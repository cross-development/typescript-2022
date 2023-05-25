{
  interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
  }

  class TFInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
      this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
      const res = await fetch('/tf-insurance', {
        method: 'POST',
        body: JSON.stringify({ vehicle: this.vehicle }),
      });
      const data = await res.json();

      return data.isSuccess;
    }
  }

  class ABInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
      this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
      const res = await fetch('/ab-insurance', {
        method: 'POST',
        body: JSON.stringify({ vehicle: this.vehicle }),
      });
      const data = await res.json();

      return data.yes;
    }
  }

  abstract class InsuranceFactory {
    public db: any;

    abstract createInsurance(): IInsurance;

    saveHistory(insurance: IInsurance): void {
      this.db.save(insurance.id, insurance.status);
    }
  }

  class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
      return new TFInsurance();
    }
  }

  class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABInsurance {
      return new ABInsurance();
    }
  }

  const tfInsuranceFactory = new TFInsuranceFactory();
  const insurance = tfInsuranceFactory.createInsurance();
  tfInsuranceFactory.saveHistory(insurance);

  // ===================
  const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance,
  };

  type IT = typeof INSURANCE_TYPE;

  class InsuranceFactoryAlt {
    public db: any;

    createInsurance<T extends keyof IT>(type: T): IT[T] {
      return INSURANCE_TYPE[type];
    }

    saveHistory(insurance: IInsurance): void {
      this.db.save(insurance.id, insurance.status);
    }
  }

  const insuranceFactoryAlt = new InsuranceFactoryAlt();
  const insurance2 = new (insuranceFactoryAlt.createInsurance('tf'))();
  insuranceFactoryAlt.saveHistory(insurance2);
}
