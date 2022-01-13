import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBuilderComponent } from './add-edit-builder.component';

describe('AddEditBuilderComponent', () => {
  let component: AddEditBuilderComponent;
  let fixture: ComponentFixture<AddEditBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
