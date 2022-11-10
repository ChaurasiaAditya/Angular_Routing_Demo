import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneblogComponent } from './viewoneblog.component';

describe('ViewoneblogComponent', () => {
  let component: ViewoneblogComponent;
  let fixture: ComponentFixture<ViewoneblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoneblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoneblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
