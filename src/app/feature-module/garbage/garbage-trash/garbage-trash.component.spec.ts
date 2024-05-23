import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageTrashComponent } from './garbage-trash.component';

describe('GarbageTrashComponent', () => {
  let component: GarbageTrashComponent;
  let fixture: ComponentFixture<GarbageTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarbageTrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarbageTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
