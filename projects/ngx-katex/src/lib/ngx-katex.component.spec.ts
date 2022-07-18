import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKatexComponent } from './ngx-katex.component';

describe('NgxKatexComponent', () => {
  let component: NgxKatexComponent;
  let fixture: ComponentFixture<NgxKatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKatexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxKatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
