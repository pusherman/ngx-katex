import {
  Component,
  ElementRef,
  OnChanges,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { KatexOptions } from 'katex';
import { NgxKatexService } from './ngx-katex.service';

@Component({
  selector: 'ngx-katex',
  template: `<span></span>`,
  standalone: true,
  styles: [],
})
export class NgxKatexComponent implements OnChanges, OnInit {
  @Input() equation!: string;
  @Input() options?: KatexOptions;
  @Output() onError = new EventEmitter<any>();

  constructor(
    private ngxKatexService: NgxKatexService,
    private element: ElementRef
  ) {}

  ngOnInit() { }

  ngOnChanges() {
    try {
      this.ngxKatexService.render(this.equation, this.element, this.options);
    } catch (e) {
      this.onError.emit(e);
    }
  }
}
