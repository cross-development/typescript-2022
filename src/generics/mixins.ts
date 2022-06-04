{
  type GConstructor<T = {}> = new (...args: any[]) => T;

  class List {
    constructor(public items: string[]) {}
  }

  class Accordion {
    isOpened: boolean;
  }

  type ListType = GConstructor<List>;
  type AccordionType = GConstructor<Accordion>;

  function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
      first() {
        return this.items[0];
      }
    };
  }

  class AccordionList {
    isOpened: boolean;

    constructor(public items: string[]) {}
  }

  const list = ExtendedList(AccordionList);
  const res = new list(["first", "second"]);

  console.log("res", res.items);
  console.log("res", res.isOpened);
  console.log("res", res.first());
}
