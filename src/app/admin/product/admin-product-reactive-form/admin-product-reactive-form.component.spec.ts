import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductReactiveFormComponent } from './admin-product-reactive-form.component';

describe('AdminProductReactiveFormComponent', () => {
  let component: AdminProductReactiveFormComponent;
  let fixture: ComponentFixture<AdminProductReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
