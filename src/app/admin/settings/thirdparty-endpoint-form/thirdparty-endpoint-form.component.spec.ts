import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyEndpointFormComponent } from './thirdparty-endpoint-form.component';

describe('ThirdpartyEndpointFormComponent', () => {
  let component: ThirdpartyEndpointFormComponent;
  let fixture: ComponentFixture<ThirdpartyEndpointFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdpartyEndpointFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdpartyEndpointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
