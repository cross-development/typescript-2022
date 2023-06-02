export class FfmpegBuilder {
  private inputPath: string;
  private options: Map<string, string> = new Map<string, string>();

  constructor() {
    this.options.set('-c:v', 'libx264');
  }

  public input(inputPath: string): this {
    this.inputPath = inputPath;
    return this;
  }

  public setVideoSize(width: number, height: number): this {
    this.options.set('-s', `${width}x${height}`);
    return this;
  }

  public output(outputPath: string): string[] {
    if (!this.inputPath) {
      throw new Error('Param Input has not been set');
    }

    const args: string[] = ['-i', this.inputPath];

    this.options.forEach((value, key) => args.push(key, value));

    args.push(outputPath);

    return args;
  }
}
