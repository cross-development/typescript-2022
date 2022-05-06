function fetchWithAuth(url: string, method: "POST" | "GET") {}

fetchWithAuth("s", "POST");
fetchWithAuth("s", "GET");
// fetchWithAuth("s", "PUT"); // error

const a = "qwe"; // : "qwe"
let b: "asd" = "asd"; // string

let method = "POST"; // string

fetchWithAuth("s", method as "POST");
