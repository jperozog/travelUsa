import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajerosComponent } from './viajeros.component';

describe('ViajerosComponent', () => {
  let component: ViajerosComponent;
  let fixture: ComponentFixture<ViajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
