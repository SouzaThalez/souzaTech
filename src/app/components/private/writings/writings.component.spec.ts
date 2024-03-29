import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingsComponent } from './writings.component';

describe('WritingsComponent', () => {
  let component: WritingsComponent;
  let fixture: ComponentFixture<WritingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WritingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
