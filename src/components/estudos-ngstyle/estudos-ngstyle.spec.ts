import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosNgstyle } from './estudos-ngstyle';

describe('EstudosNgstyle', () => {
  let component: EstudosNgstyle;
  let fixture: ComponentFixture<EstudosNgstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudosNgstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosNgstyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
