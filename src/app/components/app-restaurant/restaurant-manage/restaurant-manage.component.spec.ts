import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantManageComponent } from './restaurant-manage.component';

describe('RestaurantManageComponent', () => {
  let component: RestaurantManageComponent;
  let fixture: ComponentFixture<RestaurantManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
