{
  const toString = <T>(data: T): string | undefined => {
    if (Array.isArray(data)) {
      return data.toString();
    }

    switch (typeof data) {
      case "string":
        return data;

      case "number":
      case "symbol":
      case "bigint":
      case "boolean":
      case "function":
        return data.toString();

      case "object":
        return JSON.stringify(data);

      default:
        return undefined;
    }
  };

  toString(3); // "3"
  toString(false); // "false"
  toString([1, 2]); // "1,2"
  toString({ a: 1 }); // "{"a": 1}"
}
