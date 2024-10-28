import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTimeComponent } from './tea-time.component';

describe('TeaTimeComponent', () => {
  let component: TeaTimeComponent;
  let fixture: ComponentFixture<TeaTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
