import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifiedrouteComponent } from './specifiedroute.component';

describe('SpecifiedrouteComponent', () => {
  let component: SpecifiedrouteComponent;
  let fixture: ComponentFixture<SpecifiedrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifiedrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifiedrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
