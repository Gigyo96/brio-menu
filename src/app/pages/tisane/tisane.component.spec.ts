import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisaneComponent } from './tisane.component';

describe('TisaneComponent', () => {
  let component: TisaneComponent;
  let fixture: ComponentFixture<TisaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
