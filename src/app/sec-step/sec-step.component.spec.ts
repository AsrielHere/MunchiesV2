import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecStepComponent } from './sec-step.component';

describe('SecStepComponent', () => {
  let component: SecStepComponent;
  let fixture: ComponentFixture<SecStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
