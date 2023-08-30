import { Injectable, ElementRef } from '@angular/core';
import * as katex from 'katex';
import { KatexOptions } from 'katex';

@Injectable({
  providedIn: 'root',
})
export class NgxKatexService {
  render(equation: string, element: ElementRef, options?: KatexOptions) {
    return katex.render(equation, element.nativeElement, options);
  }
}
