import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasiComponent } from './nasi.component';

describe('NasiComponent', () => {
  let component: NasiComponent;
  let fixture: ComponentFixture<NasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
