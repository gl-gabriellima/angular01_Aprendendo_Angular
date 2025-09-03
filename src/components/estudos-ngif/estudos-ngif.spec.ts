import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosNgif } from './estudos-ngif';

describe('EstudosNgif', () => {
  let component: EstudosNgif;
  let fixture: ComponentFixture<EstudosNgif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudosNgif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudosNgif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
