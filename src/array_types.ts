{
  const skills: string[] = ["Dev", "Devops", "Testing"];

  for (const skill of skills) {
    console.log("skill", skill.toLocaleLowerCase());
  }

  const res = skills
    .filter((s: string) => s !== "Devops")
    .map((s) => s + "! ")
    .reduce((acc, item) => acc + item);

  console.log("res", res);
}
