import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveConfigrationComponent } from './move-configuration.component';

describe('MoveConfigrationComponent', () => {
  let component: MoveConfigrationComponent;
  let fixture: ComponentFixture<MoveConfigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveConfigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveConfigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
