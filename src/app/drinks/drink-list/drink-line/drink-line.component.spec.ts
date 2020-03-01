import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkLineComponent } from './drink-line.component';

describe('DrinkLineComponent', () => {
  let component: DrinkLineComponent;
  let fixture: ComponentFixture<DrinkLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
