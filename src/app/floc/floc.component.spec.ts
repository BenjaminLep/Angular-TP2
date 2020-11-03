import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlocComponent } from './floc.component';

describe('FlocComponent', () => {
  let component: FlocComponent;
  let fixture: ComponentFixture<FlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
