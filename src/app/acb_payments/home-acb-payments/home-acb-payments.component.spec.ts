import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcbPaymentsComponent } from './home-acb-payments.component';

describe('HomeAcbPaymentsComponent', () => {
  let component: HomeAcbPaymentsComponent;
  let fixture: ComponentFixture<HomeAcbPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcbPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAcbPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
