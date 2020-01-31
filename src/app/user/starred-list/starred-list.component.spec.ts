import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredListComponent } from './starred-list.component';

describe('StarredListComponent', () => {
  let component: StarredListComponent;
  let fixture: ComponentFixture<StarredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
