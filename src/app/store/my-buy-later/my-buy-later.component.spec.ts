import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBuyLaterComponent } from './my-buy-later.component';

describe('MyBuyLaterComponent', () => {
  let component: MyBuyLaterComponent;
  let fixture: ComponentFixture<MyBuyLaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBuyLaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBuyLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
