{
  const logId = (id: string | number): void => {
    console.log("id", id);
  };

  const a = logId(1); // a: void

  const multiply = (f: number, s?: number) => {
    if (!s) {
      return f * f;
    }
  };

  type voidFunc = () => void;

  const f1: voidFunc = () => {};

  const f2: voidFunc = () => {
    return true; // OK
  };

  const b = f2(); // b: void

  const skills = ["dev", "devops"];

  const user = {
    s: [""],
  };

  // callback inside forEach returns void
  skills.forEach((skill) => user.s.push(skill));
}
