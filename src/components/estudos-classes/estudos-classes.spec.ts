import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosClasses } from './estudos-classes';

describe('EstudosClasses', () => {
  let component: EstudosClasses;
  let fixture: ComponentFixture<EstudosClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudosClasses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosClasses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
