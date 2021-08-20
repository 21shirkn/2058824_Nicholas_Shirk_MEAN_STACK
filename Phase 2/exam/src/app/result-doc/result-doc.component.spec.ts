import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDocComponent } from './result-doc.component';

describe('ResultDocComponent', () => {
  let component: ResultDocComponent;
  let fixture: ComponentFixture<ResultDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
