import { ComponentFixture, TestBed } from '@angular/core/testing';

import { brewhausComponent } from './brewhaus.component';

describe('brewhausComponent', () => {
  let component: brewhausComponent;
  let fixture: ComponentFixture<brewhausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ brewhausComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(brewhausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
