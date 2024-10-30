import {ElementRef, Injectable} from '@angular/core';
import katex, {KatexOptions} from 'katex';

@Injectable({
  providedIn: 'root'
})
export class NgxKatexService {

  constructor() { }

  render(equation: string, element: ElementRef, options?: KatexOptions) {
    return katex.render(equation, element.nativeElement, options);
  }
}
