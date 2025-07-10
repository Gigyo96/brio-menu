import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranzoVeloceComponent } from './pranzo-veloce.component';

describe('PranzoVeloceComponent', () => {
  let component: PranzoVeloceComponent;
  let fixture: ComponentFixture<PranzoVeloceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PranzoVeloceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PranzoVeloceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
