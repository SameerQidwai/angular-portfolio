import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideAssistantComponent } from './roadside-assistant.component';

describe('RoadsideAssistantComponent', () => {
  let component: RoadsideAssistantComponent;
  let fixture: ComponentFixture<RoadsideAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsideAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadsideAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
