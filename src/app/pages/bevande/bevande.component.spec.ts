import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevandeComponent } from './bevande.component';

describe('BevandeComponent', () => {
  let component: BevandeComponent;
  let fixture: ComponentFixture<BevandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
