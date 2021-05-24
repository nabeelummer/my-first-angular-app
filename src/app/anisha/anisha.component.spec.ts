import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnishaComponent } from './anisha.component';

describe('AnishaComponent', () => {
  let component: AnishaComponent;
  let fixture: ComponentFixture<AnishaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnishaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
