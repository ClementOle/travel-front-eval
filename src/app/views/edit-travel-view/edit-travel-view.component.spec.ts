import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelViewComponent } from './edit-travel-view.component';

describe('EditTravelViewComponent', () => {
  let component: EditTravelViewComponent;
  let fixture: ComponentFixture<EditTravelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
