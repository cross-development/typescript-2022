{
  const skills: readonly [number, string] = [1, "Dev"];
  // skills[0] = 2; // Error

  const skill: readonly string[] = ["Dev", "Devops"];
  // skill[0] = "_"; // Error

  const readonlySkills: ReadonlyArray<string> = ["Dev", "Devops"];
  // readonlySkills[0] = "_"; // Error

  // skill.push("New"); // Error
}
