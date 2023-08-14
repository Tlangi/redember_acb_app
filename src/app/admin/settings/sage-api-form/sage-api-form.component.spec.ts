import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageApiFormComponent } from './sage-api-form.component';

describe('SageApiFormComponent', () => {
  let component: SageApiFormComponent;
  let fixture: ComponentFixture<SageApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageApiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SageApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
