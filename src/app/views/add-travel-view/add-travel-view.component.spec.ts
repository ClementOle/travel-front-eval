import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelViewComponent } from './add-travel-view.component';

describe('AddTravelViewComponent', () => {
  let component: AddTravelViewComponent;
  let fixture: ComponentFixture<AddTravelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
