import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMovingComponent } from './company-moving.component';

describe('CompanyMovingComponent', () => {
  let component: CompanyMovingComponent;
  let fixture: ComponentFixture<CompanyMovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMovingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
