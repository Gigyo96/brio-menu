import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasquaComponent } from './pasqua.component';

describe('PasquaComponent', () => {
  let component: PasquaComponent;
  let fixture: ComponentFixture<PasquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasquaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
