{
  let strOrNum: string | number = 5;

  //   type of strOrNum = number
  if (strOrNum) {
  }

  if (Math.random() > 0.5) {
    strOrNum = 5;
  } else {
    strOrNum = "str";
  }

  if (typeof strOrNum === "string") {
    console.log("strOrNum", strOrNum);
  } else {
    console.log("strOrNum", strOrNum);
  }

  let str2OrNum: typeof strOrNum;

  const user = {
    name: "John",
  };

  type keyOfUser = keyof typeof user;

  enum Direction {
    Up,
    Down,
  }

  type D = keyof typeof Direction;
}
