import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredItemComponent } from './starred-item.component';

describe('StarredItemComponent', () => {
  let component: StarredItemComponent;
  let fixture: ComponentFixture<StarredItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
