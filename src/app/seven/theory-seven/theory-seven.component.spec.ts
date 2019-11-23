import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheorySevenComponent } from './theory-seven.component';

describe('TheorySevenComponent', () => {
  let component: TheorySevenComponent;
  let fixture: ComponentFixture<TheorySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheorySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheorySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
