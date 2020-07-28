import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhotComponent } from './nhot.component';

describe('NhotComponent', () => {
  let component: NhotComponent;
  let fixture: ComponentFixture<NhotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
