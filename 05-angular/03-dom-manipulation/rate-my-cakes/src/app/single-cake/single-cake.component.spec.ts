import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCakeComponent } from './single-cake.component';

describe('SingleCakeComponent', () => {
  let component: SingleCakeComponent;
  let fixture: ComponentFixture<SingleCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
