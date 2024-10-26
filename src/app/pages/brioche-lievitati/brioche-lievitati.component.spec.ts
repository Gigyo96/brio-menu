import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriocheLievitatiComponent } from './brioche-lievitati.component';

describe('BriocheLievitatiComponent', () => {
  let component: BriocheLievitatiComponent;
  let fixture: ComponentFixture<BriocheLievitatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriocheLievitatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriocheLievitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
