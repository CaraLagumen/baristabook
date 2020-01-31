import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkItemComponent } from './drink-item.component';

describe('DrinkItemComponent', () => {
  let component: DrinkItemComponent;
  let fixture: ComponentFixture<DrinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
