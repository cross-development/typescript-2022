{
  type THttpMethod = "POST" | "GET";

  function fetchWithAuth(url: string, method: THttpMethod) {}

  type TUser = {
    name: string;
    age: number;
    skills: string[];
  };

  type TRole = {
    name: string;
    id: number;
  };

  type TUserWithRole = TUser & TRole;

  const user: TUserWithRole = {
    name: "asd",
    age: 33,
    skills: ["1", "2"],
    id: 1,
  };
}
