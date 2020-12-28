import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdboardComponent } from './ddboard.component';

describe('DdboardComponent', () => {
  let component: DdboardComponent;
  let fixture: ComponentFixture<DdboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
