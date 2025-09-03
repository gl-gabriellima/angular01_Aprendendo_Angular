import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosEventos } from './estudos-eventos';

describe('EstudosEventos', () => {
  let component: EstudosEventos;
  let fixture: ComponentFixture<EstudosEventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudosEventos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosEventos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
