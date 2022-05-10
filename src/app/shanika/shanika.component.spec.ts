import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanikaComponent } from './shanika.component';

describe('ShanikaComponent', () => {
  let component: ShanikaComponent;
  let fixture: ComponentFixture<ShanikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShanikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShanikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
