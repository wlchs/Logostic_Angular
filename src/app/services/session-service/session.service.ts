import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private exportableImageInBase64: string;

  constructor() { }

  storeExportableImage(imageInBase64: string) {
    this.exportableImageInBase64 = imageInBase64;
  }

  getExportableImage() {
    return this.exportableImageInBase64;
  }
}
