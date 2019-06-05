import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavWidgetComponent } from './sub-nav-widget.component';

describe('SubNavWidgetComponent', () => {
  let component: SubNavWidgetComponent;
  let fixture: ComponentFixture<SubNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
