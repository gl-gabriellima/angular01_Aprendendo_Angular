import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEstudos } from './menu-estudos';

describe('MenuEstudos', () => {
  let component: MenuEstudos;
  let fixture: ComponentFixture<MenuEstudos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEstudos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEstudos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
