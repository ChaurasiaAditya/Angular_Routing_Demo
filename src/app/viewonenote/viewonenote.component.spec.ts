import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonenoteComponent } from './viewonenote.component';

describe('ViewonenoteComponent', () => {
  let component: ViewonenoteComponent;
  let fixture: ComponentFixture<ViewonenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewonenoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewonenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
