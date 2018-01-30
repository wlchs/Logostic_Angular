import { Injectable } from '@angular/core';
import * as Konva from 'konva';
import { Ng2PicaService } from 'ng2-pica';

/**
 * Scale the whole image to be the same size as the background
 */

@Injectable()
export class ImageService {

  constructor(private ng2PicaService: Ng2PicaService) { }
  
  /**
  * Upsize and convert canvas elements to image
  * @param canvas 
  * @param backgroundImage 
  */
  format(canvas: Konva.Stage, backgroundImage: Konva.Image){
    // Set canvas size to match image size
    canvas.setSize({width: backgroundImage.width(), height: backgroundImage.height()});
    
    // Set scaling to 1
    canvas.scale({x: 1, y: 1});

    // Apply changes
    canvas.draw();

    // Convert canvas to DataURL
    let raw = canvas.toDataURL({
        callback: undefined,
        mimeType: "image/jpeg",
        x: 0,
        y: 0,
        width: canvas.width(),
        height: canvas.height(),
        quality: 1
    });

    return raw;
  }

  /**
   * Resize image to match the size of the window
   * @param image Input file
   */
  resizeImage(image: File) {
    return new Promise( (resolve, reject) => {
      this.ng2PicaService.resize([image], Math.max(window.innerWidth, 800), Math.max(window.innerHeight, 600), true)
        .subscribe( result => resolve(result) );
    });
  }
}
