import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatoComponent } from './salato.component';

describe('SalatoComponent', () => {
  let component: SalatoComponent;
  let fixture: ComponentFixture<SalatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
