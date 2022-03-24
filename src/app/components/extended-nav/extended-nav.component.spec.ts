import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedNavComponent } from './extended-nav.component';

describe('ExtendedNavComponent', () => {
  let component: ExtendedNavComponent;
  let fixture: ComponentFixture<ExtendedNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
