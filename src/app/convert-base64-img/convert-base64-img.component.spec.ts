import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertBase64ImgComponent } from './convert-base64-img.component';

describe('ConvertBase64ImgComponent', () => {
  let component: ConvertBase64ImgComponent;
  let fixture: ComponentFixture<ConvertBase64ImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertBase64ImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertBase64ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
