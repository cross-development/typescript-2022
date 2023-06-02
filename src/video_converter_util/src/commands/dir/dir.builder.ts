export class DirBuilder {
  private options: Map<string, string> = new Map<string, string>();

  public detailedOutput(): this {
    this.options.set('-l', '');
    return this;
  }

  public output(): string[] {
    const args: string[] = [];

    this.options.forEach((value, key) => {
      args.push(key);
      args.push(value);
    });

    return args;
  }
}
