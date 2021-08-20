import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDocComponent } from './test-doc.component';

describe('TestDocComponent', () => {
  let component: TestDocComponent;
  let fixture: ComponentFixture<TestDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
