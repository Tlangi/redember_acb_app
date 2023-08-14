import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageFieldMappingFormComponent } from './sage-field-mapping-form.component';

describe('SageFieldMappingFormComponent', () => {
  let component: SageFieldMappingFormComponent;
  let fixture: ComponentFixture<SageFieldMappingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageFieldMappingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SageFieldMappingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
