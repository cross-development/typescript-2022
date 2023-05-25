{
  enum ImageFormat {
    PNG = 'png',
    JPEG = 'jpeg',
  }

  interface IResolution {
    width: number;
    height: number;
  }

  interface IImageConversion extends IResolution {
    format: ImageFormat;
  }

  class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng() {
      if (this.formats.includes(ImageFormat.PNG)) {
        return this;
      }

      this.formats.push(ImageFormat.PNG);
      return this;
    }

    addJpeg() {
      if (this.formats.includes(ImageFormat.JPEG)) {
        return this;
      }

      this.formats.push(ImageFormat.JPEG);
      return this;
    }

    addResolution(width: number, height: number) {
      this.resolutions.push({ width, height });
      return this;
    }

    build(): IImageConversion[] {
      const res: IImageConversion[] = [];

      for (const r of this.resolutions) {
        for (const f of this.formats) {
          res.push({
            format: f,
            width: r.width,
            height: r.height,
          });
        }
      }

      return res;
    }
  }

  const resAfterBuild = new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build();

  console.log('resAfterBuild', resAfterBuild);
}
