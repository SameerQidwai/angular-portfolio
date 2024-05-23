import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtermRentComponent } from './longterm-rent.component';

describe('LongtermRentComponent', () => {
  let component: LongtermRentComponent;
  let fixture: ComponentFixture<LongtermRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongtermRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongtermRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
