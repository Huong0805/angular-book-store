import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlideshowComponent } from './product-slideshow.component';

describe('ProductSlideshowComponent', () => {
  let component: ProductSlideshowComponent;
  let fixture: ComponentFixture<ProductSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
