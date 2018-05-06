import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgComponent } from './my-img.component';

describe('MyImgComponent', () => {
  let component: MyImgComponent;
  let fixture: ComponentFixture<MyImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
