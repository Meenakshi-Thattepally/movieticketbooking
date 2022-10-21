import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvedetailsComponent } from './mvedetails.component';

describe('MvedetailsComponent', () => {
  let component: MvedetailsComponent;
  let fixture: ComponentFixture<MvedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
