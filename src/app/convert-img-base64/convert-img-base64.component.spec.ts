import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertImgBase64Component } from './convert-img-base64.component';

describe('ConvertImgBase64Component', () => {
  let component: ConvertImgBase64Component;
  let fixture: ComponentFixture<ConvertImgBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertImgBase64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertImgBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
