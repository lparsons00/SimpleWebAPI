import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuilderComponent } from './show-builder.component';

describe('ShowBuilderComponent', () => {
  let component: ShowBuilderComponent;
  let fixture: ComponentFixture<ShowBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
