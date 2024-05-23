import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMovingComponent } from './private-moving.component';

describe('PrivateMovingComponent', () => {
  let component: PrivateMovingComponent;
  let fixture: ComponentFixture<PrivateMovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMovingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
