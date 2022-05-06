{
  enum StatusCode {
    SUCCESS = 1,
    PROCESS = "process",
    FAILED = "failed",
  }

  const res = {
    message: "Success",
    statusCode: StatusCode.SUCCESS,
  };

  // 1 - success
  // 2 - process
  // 3 - failed

  if (res.statusCode === StatusCode.SUCCESS) {
    console.log("success", res.message);
  }

  function action(status: StatusCode) {
    console.log(status);
  }

  action(StatusCode.SUCCESS);
  action(1);
  // action("process"); // Error

  function compute() {
    return 3;
  }

  enum Roles {
    ADMIN = 1,
    USER = compute(),
  }

  function test(x: { ADMIN: number }) {
    console.log("x", x);
  }

  test(Roles);

  // Replace with const
  const enum USER_ROLES {
    ADMIN = 1,
    USER = 2,
  }

  const res2 = Roles.ADMIN;
}
