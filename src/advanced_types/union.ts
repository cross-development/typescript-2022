{
  const arr: (string | number)[] = ["string", 1];

  function logId(id: string | number | boolean) {
    if (typeof id === "string") {
      console.log("id", id); // string
    } else if (typeof id === "number") {
      console.log("id", id); // number
    } else {
      console.log("id", id); // boolean
    }
  }

  function logError(err: string | string[]) {
    if (Array.isArray(err)) {
      console.log("err", err); // string[]
    } else {
      console.log("err", err); // string
    }
  }

  function logObj(obj: { a: number } | { b: number }) {
    if ("a" in obj) {
      console.log("obj.a", obj.a); // without obj.b
    } else {
      console.log("obj.b", obj.b); // only obj.b
    }
  }

  function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
      console.log("a", a); // "a" as string
    } else {
      console.log("a", a); // "a" as string or number
    }
  }
}
