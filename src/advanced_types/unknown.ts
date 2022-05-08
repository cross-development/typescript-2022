{
  let input: unknown;

  input = 3;
  input = ["1", "2"];

  //   let res: string = input; // error until defines type

  function run(i: unknown) {
    if (typeof i === "number") {
      i += 1;
    } else {
      console.log("i", i); // i: unknown
    }
  }

  run(input);

  async function getData() {
    try {
      await fetch("");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async function getDataForce() {
    try {
      await fetch("");
    } catch (error) {
      const err = error as Error;
    }
  }

  type U1 = unknown | number; // type is unknown
  type U2 = unknown & string; // type is string
}
