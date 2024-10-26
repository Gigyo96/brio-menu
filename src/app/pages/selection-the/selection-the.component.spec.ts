import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTheComponent } from './selection-the.component';

describe('SelectionTheComponent', () => {
  let component: SelectionTheComponent;
  let fixture: ComponentFixture<SelectionTheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionTheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionTheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
