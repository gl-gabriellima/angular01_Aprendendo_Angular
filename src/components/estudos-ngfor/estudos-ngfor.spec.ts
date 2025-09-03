import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosNgfor } from './estudos-ngfor';

describe('EstudosNgfor', () => {
  let component: EstudosNgfor;
  let fixture: ComponentFixture<EstudosNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudosNgfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosNgfor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
