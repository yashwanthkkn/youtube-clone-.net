import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePopListComponent } from './explore-pop-list.component';

describe('ExplorePopListComponent', () => {
  let component: ExplorePopListComponent;
  let fixture: ComponentFixture<ExplorePopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
