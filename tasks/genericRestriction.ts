{
  const data = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
  ];

  interface ID {
    id: number;
  }

  function sort<T extends ID>(data: T[], type: "asc" | "desc" = "asc"): T[] {
    return data.sort((a, b) => {
      switch (type) {
        case "asc":
          return a.id - b.id;

        case "desc":
          return b.id - a.id;
      }
    });
  }

  sort(data); // ids: 1, 2, 3
  sort(data, "desc"); // ids: 3, 2, 1
}
